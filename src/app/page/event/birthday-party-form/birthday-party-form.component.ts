import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-birthday-party-form',
  imports: [RouterLink,FormsModule],
  templateUrl: './birthday-party-form.component.html',
  styleUrl: './birthday-party-form.component.css'
})


export class BirthdayPartyFormComponent {
  ownerName: string = '';
  eventdate: Date = new Date();
  headcount: number = 0;
  starttime:Date = new Date();
  endtime:Date = new Date();

  formdata:FormData= new FormData();
 
  submitbuttonOnClick() {
    if (!this.ownerName) {
      alert('Owner Name is required!');
      return;
    }
    if (!this.eventdate) {
      alert('Event Date is required!');
      return;
    }
    if (this.headcount <= 0) {
      alert('Headcount should be greater than 0!');
      return;
    }
    if (!this.starttime || !this.endtime) {
      alert('Start Time and End Time are required!');
      return;
    }
    if (this.starttime >= this.endtime) {
      alert('Start Time must be earlier than End Time!');
      return;
    }

    // Append data
    this.formdata.append('ownerName', this.ownerName);
    this.formdata.append('eventdate', this.eventdate.toString());
    this.formdata.append('headcount', this.headcount.toString());
    this.formdata.append('starttime', this.starttime.toString());
    this.formdata.append('endtime', this.endtime.toString());

    alert('Form submitted successfully!');
    console.log('Form Data:', this.formdata);

   
  }

}
