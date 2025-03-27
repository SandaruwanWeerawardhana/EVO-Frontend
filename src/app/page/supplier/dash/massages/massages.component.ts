
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client, over } from 'stompjs';
import { catchError, of, retry, tap } from 'rxjs';

@Component({
  selector: 'app-massages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './massages.component.html',
  styleUrl: './massages.component.css'
})
export class MassagesComponent implements OnInit, OnDestroy {
  connectionStatus: 'CONNECTED' | 'CONNECTING' | 'DISCONNECTED' = 'DISCONNECTED';
  messageText: string = '';
  private stompClient: Client | null = null;
  private webSocket: WebSocket | null = null;
  messages: any[] = [];
  adminIds: string[] = [];
  selectedAdminId: string | null = null;
  supplierId: number = 101;

  // New properties
  loadingAdmins = true;
  loadError: string | null = null;
  wsUrl = 'ws://localhost:8080/ws';
  reconnectAttempts = 0;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadAdminIds();
    this.initializeWebSocket();
  }

  private initializeWebSocket() {
    this.connect();
  }

  private loadAdminIds() {
    this.http.get<string[]>(
      `http://localhost:8080/system/message/admin-supplier/adminsBySupplierId?supplierId=${this.supplierId}`
    ).pipe(
      retry(2),
      catchError(error => {
        this.loadError = error.message;
        this.loadingAdmins = false;
        return of([]);
      }),
      tap(() => this.loadingAdmins = false)
    ).subscribe(ids => {
      this.adminIds = ids;
      if (ids.length > 0 && !this.selectedAdminId) {
        this.selectedAdminId = ids[0];
      }
    });
  }

  private loadMessages(adminId: string) {
    console.log('Loading messages for Admin ID:', adminId); 
    this.http.get<any[]>(
      `http://localhost:8080/system/message/admin-supplier/chat/${adminId}/${this.supplierId}`
    ).pipe(
      catchError(error => {
        console.error('Failed to load messages:', error);
        return of([]); 
      })
    ).subscribe(messages => {
      console.log('Messages loaded:', messages);
      this.messages = messages.map(msg => ({
        content: msg.content,
        timestamp: this.parseDate(msg.send_time), 
        sender: msg.user_type === 'SUPPLIER' ? 'SUPPLIER' : 'ADMIN'
      }));
      this.cdr.detectChanges(); 
    });
  }

  // Add date parsing helper
  private parseDate(dateString: string): Date {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date() : date;
  }

  selectAdmin(adminId: string) {
    console.log('Selected Admin ID:', adminId); 
    this.selectedAdminId = adminId;
    this.messages = [];
    this.loadMessages(adminId);
    this.updateWebSocketSubscription();
  }

  private updateWebSocketSubscription() {
    if (this.stompClient?.connected) {
      console.log('Updating WebSocket subscription for Admin ID:', this.selectedAdminId); 
      this.stompClient.unsubscribe('current_chat');
      this.stompClient.subscribe(
        `/topic/chat/${this.supplierId}/${this.selectedAdminId}`,
        (message) => this.handleIncomingMessage(JSON.parse(message.body))
      );
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

  private handleIncomingMessage(message: any) {
    if (message.supplierId === this.supplierId && message.adminId === this.selectedAdminId) {
      const newMsg = {
        content: message.content,
        timestamp: new Date(message.timestamp),
        sender: message.user_type === 'SUPPLIER' ? 'user' : 'admin'
      };

   
      if (!this.messages.some(m => 
        m.content === newMsg.content && 
        m.timestamp.getTime() === newMsg.timestamp.getTime()
      )) {
        this.messages.push(newMsg);
        this.cdr.detectChanges();
      }
    }
  }

  sendMessage() {
    if (this.messageText.trim() && this.stompClient?.connected && this.selectedAdminId) {
      const message = {
        content: this.messageText,
        timestamp: new Date().toISOString(),
        user_type: 'SUPPLIER',
        supplierId: this.supplierId,
        adminId: this.selectedAdminId
      };

      this.stompClient.send('/app/chat', {}, JSON.stringify(message));
      
    
      this.messages.push({
        ...message,
        timestamp: new Date(message.timestamp),
        sender: 'user'
      });
      this.messageText = '';
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