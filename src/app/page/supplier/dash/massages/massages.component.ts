import { CommonModule, DatePipe } from '@angular/common'; // Import DatePipe
import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client, over } from 'stompjs';
import { catchError, of, retry, tap } from 'rxjs';

interface Message {
  content: string;
  sendTime: Date;
  sender: 'SUPPLIER' | 'ADMIN';
  adminId: string;
  supplierId: number;
}

interface IncomingMessage {
  content: string;
  sendTime: string;
  userType: 'SUPPLIER' | 'ADMIN';
  adminId: string;
  supplierId: number;
}

@Component({
  selector: 'app-massages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css'],
  providers: [DatePipe] 
})
export class MassagesComponent implements OnInit, OnDestroy {
  connectionStatus: 'CONNECTED' | 'CONNECTING' | 'DISCONNECTED' = 'DISCONNECTED';
  messageText: string = '';
  private stompClient: Client | null = null;
  private webSocket: WebSocket | null = null;
  messages: Message[] = [];
  adminIds: string[] = [];
  selectedAdminId: string | null = null;
  supplierId: number = 101;

  loadingAdmins = true;
  loadError: string | null = null;
  wsUrl = 'ws://localhost:8080/ws';
  reconnectAttempts = 0;
  loadingMessages = false;
  cdr: any;

  constructor(
    private http: HttpClient,
    //private cdr: ChangeDetectorRef,
    private datePipe: DatePipe 
  ) {}

  ngOnInit() {
    this.loadAdminIds();
    this.initializeWebSocket();
  }

  private initializeWebSocket() {
    this.connectionStatus = 'CONNECTING';
    this.webSocket = new WebSocket('ws://localhost:8080/ws');
    this.stompClient = over(this.webSocket);

    this.stompClient.connect({},
        (frame) => this.onConnectSuccess(frame),
        (error) => this.onConnectError(error)
    );
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
    this.loadingMessages = true;
    this.http.get<IncomingMessage[]>(
      `http://localhost:8080/system/message/admin-supplier/chat/${adminId}/${this.supplierId}`
    ).pipe(
      catchError(error => {
        console.error('Failed to load messages:', error);
        return of([]);
      })
    ).subscribe(messages => {
      this.messages = messages.map(msg => ({
        content: msg.content,
        sendTime: this.parseDate(msg.sendTime), 
        sender: msg.userType === 'SUPPLIER' ? 'SUPPLIER' : 'ADMIN',
        adminId: msg.adminId,
        supplierId: msg.supplierId
      }));
      this.loadingMessages = false;
      this.cdr.detectChanges();
    });
  }
  
  private parseDate(dateString: string): Date {
    return new Date(dateString); 
  }
  
  private formatSendTime(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd\'T\'HH:mm:ss') || '';
  }

  selectAdmin(adminId: string) {
    console.log('Selected Admin ID:', adminId); 
    this.selectedAdminId = adminId;
    this.messages = [];
    this.loadMessages(adminId);
    this.updateWebSocketSubscription();
  }

  private updateWebSocketSubscription() {
    if (this.stompClient?.connected && this.selectedAdminId) {
        const subscriptionPath = `/topic/chat/${this.supplierId}/${this.selectedAdminId}`;
        
        if ((this.stompClient as any).subscriptions?.['current_chat']) {
            this.stompClient.unsubscribe('current_chat');
        }
      
        this.stompClient.subscribe(
            subscriptionPath, 
            (message) => this.handleIncomingMessage(JSON.parse(message.body)),
            { id: 'current_chat' }
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

  private handleIncomingMessage(message: IncomingMessage) {
    if (message.supplierId === this.supplierId && message.adminId === this.selectedAdminId) {
      const newMsg: Message = {
        content: message.content,
        sendTime: this.parseDate(message.sendTime), 
        sender: message.userType === 'SUPPLIER' ? 'SUPPLIER' : 'ADMIN',
        adminId: message.adminId,
        supplierId: message.supplierId
      };

      if (!this.messages.some(m => 
        m.content === newMsg.content && 
        m.sendTime.getTime() === newMsg.sendTime.getTime()
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
        supplierId: this.supplierId,
        adminId: this.selectedAdminId
      };
    
      this.stompClient.send(
        `/app/chat/admin-supplier/${this.supplierId}/${this.selectedAdminId}`,
        {},
        JSON.stringify(message)
      );

      this.messages.push({
        content: this.messageText,
        sendTime: new Date(), 
        sender: 'SUPPLIER',
        adminId: this.selectedAdminId,
        supplierId: this.supplierId
      });
      
      this.messageText = '';
    
      this.cdr.detectChanges();
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
