import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-get-together-form',
  imports: [ FormsModule,CommonModule],
  templateUrl: './get-together-form.component.html',
  styleUrl: './get-together-form.component.css'
})
export class GetTogetherFormComponent {

  formData = {
    title: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    capacity: 0
  };

  submit() {
    const now = new Date();
    const eventDate = new Date(this.formData.eventDate);
    const startDateTime = new Date(`${this.formData.eventDate}T${this.formData.startTime}`);
    const endDateTime = new Date(`${this.formData.eventDate}T${this.formData.endTime}`);
  
    if (
      !this.formData.title.trim() ||
  !this.formData.description.trim() ||
  !this.formData.eventDate ||
  !this.formData.startTime ||
  !this.formData.endTime ||
  this.formData.capacity < 1
    ) {
      Swal.fire({
        title: 'Error',
        text: 'All fields are required!',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-danger'
        }
      });
      return;
    }
  
    if (eventDate < new Date(now.toDateString())) {
      Swal.fire({
        title: 'Invalid Date',
        text: 'Event date cannot be in the past.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-danger'
        }
      });
      return;
    }
  
    if (startDateTime >= endDateTime) {
      Swal.fire({
        title: 'Invalid Time',
        text: 'Start time must be before end time.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'btn btn-danger'
        }
      });
      return;
    }
  
    Swal.fire({
      title: 'Success!',
      text: 'Event submitted successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      timer: 3000
    });
  
    console.log('Form is valid');
    console.log(this.formData);
  }
  
}
