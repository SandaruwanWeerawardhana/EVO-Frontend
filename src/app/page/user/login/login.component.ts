import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private sampleData = {
    userEmail: "nipun@gmail.com",
    password: "12345678"
  };

  txtEmail: string = '';
  txtPassword: string = '';

  loginButtonOnAction(): void {
    if(this.sampleData.userEmail === this.txtEmail && this.sampleData.password === this.txtPassword) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.'
      });
    }
  }
  
}