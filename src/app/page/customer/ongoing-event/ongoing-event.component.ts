import { Component } from '@angular/core';

@Component({
  selector: 'app-ongoing-event',
  imports: [],
  templateUrl: './ongoing-event.component.html',
  styleUrl: './ongoing-event.component.css'
})
export class OngoingEventComponent {
  agenda = [
    { name: 'Pre-ceremony', startDate: '19/04/2024 09:00', duration: 3 },
    { name: 'Hair & Makeup', startDate: '19/04/2024 09:00', duration: 1 },
    { name: 'Vendors Arrive', startDate: '19/04/2024 10:00', duration: 1 },
    { name: 'Ceremony', startDate: '19/04/2024 12:00', duration: 2 },
    { name: 'Reception', startDate: '19/04/2024 15:00', duration: 4 }
  ];
}
