import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-get-together-form',
  imports: [RouterLink , FormsModule,CommonModule],
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
    if (
      !this.formData.title ||
      !this.formData.description ||
      !this.formData.eventDate ||
      !this.formData.startTime ||
      !this.formData.endTime ||
      this.formData.capacity < 1
    ) {
      console.log('Form is invalid');
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
