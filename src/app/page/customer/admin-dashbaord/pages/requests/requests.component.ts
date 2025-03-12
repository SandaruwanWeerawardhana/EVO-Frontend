import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requests',
  imports: [CommonModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  requests = [
    { id: 'T001', date: '2022/4/5' },
    { id: 'T002', date: '2022/4/6' },
    { id: 'T003', date: '2022/4/7' }
  ];

  selectedRequest: any = null;

  openModal(request: any) {
    this.selectedRequest = request;
  }

  closeModal() {
    this.selectedRequest = null;
  }
}





