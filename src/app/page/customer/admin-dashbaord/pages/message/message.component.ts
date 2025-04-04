// F:\PROJECT CLASS\front\EVO-Frontend\src\app\page\customer\admin-dashbaord\pages\message\message.component.ts



import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client, over } from 'stompjs';
import { catchError, of, retry, tap } from 'rxjs';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit, OnDestroy  {
  @ViewChild('chatContainer') chatContainer!: ElementRef; // Reference to the chat container

  connectionStatus: 'CONNECTED' | 'CONNECTING' | 'DISCONNECTED' = 'DISCONNECTED';
  messageText: string = '';
  private stompClient: Client | null = null;
  private webSocket: WebSocket | null = null;
  messages: any[] = [];
  supplierIds: string[] = [];
  selectedSupplierId: string | null = null;
  adminId: number = 1;

  loadingSuppliers = true;
  loadingMessages = false;
  loadError: string | null = null;
  messageLoadError: string | null = null;
  wsUrl = 'wss://localhost:8080/ws';
  reconnectAttempts = 0;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadSupplierIds();
    this.initializeWebSocket();
  }

  private initializeWebSocket() {
    this.connect();
  }

  private loadSupplierIds() {
    this.loadingSuppliers = true;
    this.http.get<string[]>(
      `http://localhost:8080/system/message/admin-supplier/suppliersByAdminId/${this.adminId}`
    ).pipe(
      retry(2),
      catchError(error => {
        this.loadError = error.message;
        this.loadingSuppliers = false;
        return of([]);
      })
    ).subscribe(ids => {
      this.supplierIds = ids;
      this.loadingSuppliers = false;
      this.cdr.detectChanges();
      console.log("Loaded supplier IDs:", ids);
    });
  }

  private loadMessages(supplierId: string) {
    console.log('Loading messages for Supplier ID:', supplierId);
    this.loadingMessages = true;
    this.messageLoadError = null;
    this.messages = [];
    this.cdr.detectChanges();

    
    this.http.get<any[]>(
      `http://localhost:8080/system/message/admin-supplier/chat/${this.adminId}/${supplierId}`
    ).pipe(
      catchError(error => {
        console.error('Failed to load messages:', error);
        this.messageLoadError = error.message || 'Failed to load messages';
        this.loadingMessages = false;
        this.cdr.detectChanges();
        return of([]);
      })
    ).subscribe({
      next: (messages) => {
        console.log('Raw API response:', messages);
        this.messages = messages.map(msg => ({
          content: msg.content,
          timestamp: this.parseDate(msg.sendTime), // match backend field name
          sender: msg.userType === 'SUPPLIER' ? 'SUPPLIER' : 'ADMIN' // corrected field name
        }));
        console.log('Processed messages:', this.messages);
        this.loadingMessages = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error in messages subscription:', error);
        this.messageLoadError = error.message || 'Error loading messages';
        this.loadingMessages = false;
        this.cdr.detectChanges();
      }
    });
}

private handleIncomingMessage(message: any) {
  console.log('Incoming message:', message);

  const isRelevantMessage =
    message.supplierId == this.selectedSupplierId &&
    message.adminId == this.adminId.toString();

  if (isRelevantMessage) {
    const newMsg = {
      content: message.content,
      timestamp: this.parseDate(message.sendTime),
      sender: message.userType === 'SUPPLIER' ? 'SUPPLIER' : 'ADMIN'
    };

    // Prevent duplicate messages
    if (
      !this.messages.some(
        (m) =>
          m.content === newMsg.content &&
          m.timestamp.getTime() === newMsg.timestamp.getTime() &&
          m.sender === newMsg.sender
      )
    ) {
      this.messages = [...this.messages, newMsg];
      this.cdr.detectChanges();
      this.scrollToBottom(); // Scroll to the bottom after adding a new message
    }
  }
}

sendMessage() {
  console.log('Send button clicked');
  if (!this.selectedSupplierId || !this.messageText.trim() || !this.stompClient?.connected) {
    return;
  }

  const message = {
    adminId: this.adminId,
    supplierId: this.selectedSupplierId,
    content: this.messageText,
    sendTime: new Date().toISOString(),
    userType: 'ADMIN'
  };

  const destination = `/app/chat/admin-supplier/${this.selectedSupplierId}/${this.adminId}`;

  // Send the message via WebSocket
  this.stompClient.send(destination, {}, JSON.stringify(message));

  // Clear the input field
  this.messageText = '';
  this.cdr.detectChanges();
}

 private parseDate(dateString: string): Date {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date() : date;
  }

  selectSupplier(supplierId: string) {
    console.log('Selected Supplier ID:', supplierId); 
    this.selectedSupplierId = supplierId;
    this.messages = [];
    this.loadMessages(supplierId);
    this.updateWebSocketSubscription();
  }



  private updateWebSocketSubscription() {
    if (this.stompClient?.connected && this.selectedSupplierId) {
      // Corrected path: supplierId first, then adminId
      const subscriptionPath = `/topic/chat/${this.selectedSupplierId}/${this.adminId}`;
  
      // Unsubscribe properly
      if ((this.stompClient as any).subscriptions['current_chat']) {
        this.stompClient.unsubscribe('current_chat');
      }
  
      // Subscribe to the correct topic
      this.stompClient.subscribe(
        subscriptionPath,
        (message) => this.handleIncomingMessage(JSON.parse(message.body)),
        { id: 'current_chat' }
      );
      console.log('Admin subscribed to:', subscriptionPath);
    }
  }

  connect() {
    this.connectionStatus = 'CONNECTING';
    this.cdr.detectChanges();

    this.webSocket = new WebSocket(this.wsUrl);
    this.stompClient = over(this.webSocket);

    this.stompClient.connect({},
      (frame: any) => this.onConnectSuccess(frame),
      (error: any) => this.onConnectError(error)
    );
  }

  private onConnectSuccess(frame: any) {
    console.log('Connected:', frame);
    this.connectionStatus = 'CONNECTED';
    this.reconnectAttempts = 0;
    this.cdr.detectChanges();

    this.stompClient?.subscribe('/topic/messages', (message) => {
      const parsed = JSON.parse(message.body);
      this.handleIncomingMessage(parsed);
    });
  }

  private onConnectError(error: any) {
    console.error('Connection error:', error);
    this.connectionStatus = 'DISCONNECTED';
    this.reconnectAttempts++;
    this.cdr.detectChanges();

    const delay = Math.min(5000 * this.reconnectAttempts, 30000);
    setTimeout(() => this.connect(), delay);
  }

  private scrollToBottom() {
    if (this.chatContainer) {
      setTimeout(() => {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }, 0); // Delay to ensure DOM updates are applied
    }
  }

  ngOnDestroy() {
    if (this.stompClient?.connected) {
      this.stompClient.disconnect(() => {
        console.log('STOMP connection closed');
      });
    }
    if (this.webSocket) {
      this.webSocket.close();
    }
  }
}