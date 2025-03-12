import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-event',
  imports: [],
  templateUrl: './booking-event.component.html',
  styleUrl: './booking-event.component.css'
})
export class BookingEventComponent {
  popUpDetails() {
    Swal.fire({
      title: "Booking Details",
      text: "All the details of the booked event "
    });
  }
}
