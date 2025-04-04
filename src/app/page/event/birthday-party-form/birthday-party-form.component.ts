import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-birthday-party-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './birthday-party-form.component.html',
  styleUrl: './birthday-party-form.component.css'
})

export class BirthdayPartyFormComponent {
  ownerName: string = '';
  eventdate: Date = new Date();
  headcount: number = 0;
  starttime: Date = new Date();
  endtime: Date = new Date();

  formdata: FormData = new FormData();

  submitbuttonOnClick() {
    if (!this.ownerName) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Owner Name is required!',
      });
      return;
    }
    if (!this.eventdate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Event Date is required!',
      });
      return;
    }
    if (this.headcount <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Headcount should be greater than 0!',
      });
      return;
    }
    if (!this.starttime || !this.endtime) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Start Time and End Time are required!',
      });
      return;
    }
    if (this.starttime >= this.endtime) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Start Time must be earlier than End Time!',
      });
      return;
    }

  
    this.formdata.append('ownerName', this.ownerName);
    this.formdata.append('eventdate', this.eventdate.toString());
    this.formdata.append('headcount', this.headcount.toString());
    this.formdata.append('starttime', this.starttime.toString());
    this.formdata.append('endtime', this.endtime.toString());

    Swal.fire({
      icon: 'success',
      title: 'Form submitted successfully!',
      showConfirmButton: false,
      timer: 1500,
    });

    console.log('Form Data:', this.formdata);
    
}
