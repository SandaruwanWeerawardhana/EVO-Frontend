import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client, over } from 'stompjs';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAdminIds();
    this.connect();
  }

  private loadAdminIds() {
    this.http.get<string[]>(
      `/api/system/message/admin-supplier/adminsBySupplierId?supplierId=${this.supplierId}`
    ).subscribe({
      next: (ids) => {
        this.adminIds = ids;
        if (ids.length > 0) {
          this.selectedAdminId = ids[0];
        }
      },
      error: (err) => console.error('Failed to load admin IDs:', err)
    });
  }
  selectAdmin(adminId: string) {
    this.selectedAdminId = adminId;
    this.messages = []; // Clear previous messages when switching admin
  }

  connect() {
    this.connectionStatus = 'CONNECTING';
    this.webSocket = new WebSocket('ws://localhost:8080/ws');
    this.stompClient = over(this.webSocket);
    
    this.stompClient.connect({}, 
      (frame) => {
        this.connectionStatus = 'CONNECTED';
        this.stompClient?.subscribe('/topic/messages', (message) => {
          this.handleIncomingMessage(JSON.parse(message.body));
        });
      }, 
      (error) => {
        this.connectionStatus = 'DISCONNECTED';
        console.error('STOMP error:', error);
      }
    );
  }

  private handleIncomingMessage(message: any) {
    if (message.recipientId === this.selectedAdminId) {
      this.messages.push(message);
    }
  }

  sendMessage() {
    if (this.messageText.trim() && this.stompClient?.connected && this.selectedAdminId) {
      const message = {
        content: this.messageText,
        timestamp: new Date().toISOString(),
        sender: 'supplier',
        recipientId: this.selectedAdminId,
        supplierId: this.supplierId
      };
      
      this.stompClient.send('/app/chat', {}, JSON.stringify(message));
      this.messages.push({...message, sender: 'user'});
      this.messageText = '';
    }
  }

  ngOnDestroy() {
    if (this.stompClient?.connected) {
      // Add callback function as first parameter
      this.stompClient.disconnect(() => {
        console.log('STOMP connection closed');
      });
    }
    if (this.webSocket) {
      this.webSocket.close();
    }
  }
}