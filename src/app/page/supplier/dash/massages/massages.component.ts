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
  styleUrl: './massages.component.css',
})
export class MassagesComponent implements OnInit, OnDestroy {
  connectionStatus: 'CONNECTED' | 'CONNECTING' | 'DISCONNECTED' =
    'DISCONNECTED';
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
    this.connect();
  }

  private loadAdminIds() {
    this.http
      .get<string[]>(
        `http://localhost:8080/system/message/admin-supplier/adminsBySupplierId?supplierId=${this.supplierId}`
      )
      .pipe(
        retry(2),
        catchError((error) => {
          this.loadError = error.message;
          this.loadingAdmins = false;
          return of([]);
        }),
        tap(() => (this.loadingAdmins = false))
      )
      .subscribe((ids) => {
        this.adminIds = ids;
        if (ids.length > 0 && !this.selectedAdminId) {
          this.selectedAdminId = ids[0];
        }
      });
  }

  selectAdmin(adminId: string) {
    this.selectedAdminId = adminId;
    this.messages = []; // Clear previous messages when switching admin
  }

  connect() {
    this.connectionStatus = 'CONNECTING';
    this.cdr.detectChanges();

    this.webSocket = new WebSocket(this.wsUrl);
    this.stompClient = over(this.webSocket);

    this.stompClient.connect(
      {},
      (frame: any) => this.onConnectSuccess(frame),
      (error: any) => this.onConnectError(error)
    );
  }

  private onConnectSuccess(frame: any) {
    console.log('Connected:', frame);
    this.connectionStatus = 'CONNECTED';
    this.reconnectAttempts = 0;
    this.cdr.detectChanges();

    // Subscribe to messages
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

  private handleIncomingMessage(message: {
    content: string;
    timestamp: string;
    sender: string;
    recipientId: string;
  }) {
    if (message.recipientId === this.selectedAdminId) {
      this.messages.push({
        ...message,
        timestamp: new Date(message.timestamp),
      });
      this.cdr.detectChanges();
    }
  }

  sendMessage() {
    if (
      this.messageText.trim() &&
      this.stompClient?.connected &&
      this.selectedAdminId
    ) {
      const message = {
        content: this.messageText,
        timestamp: new Date().toISOString(),
        sender: 'supplier',
        recipientId: this.selectedAdminId,
        supplierId: this.supplierId,
      };

      this.stompClient.send('/app/chat', {}, JSON.stringify(message));
      this.messages.push({ ...message, sender: 'user' });
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
