import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-profile-customer',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent {
  
 
  isEditing: boolean = false;

  customer = {

    fullName: 'Samantha smaranayaka',
    email: 'samantha@gmail.com',
    phoneNumber: '0785678900',
    address: 'galle',
    gender: 'Male',
    profileImgSrc: '/profile/profile.jpg' 
    
  };

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.customer.profileImgSrc = e.target?.result as string; 
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveChanges(): void {
    if (!this.validateForm()) {
      return;
    }
  
    this.customer = {
      ...this.customer, 
      fullName: (document.getElementById('editFirstName') as HTMLInputElement).value.trim(),
      email: (document.getElementById('editEmail') as HTMLInputElement).value.trim(),
      phoneNumber: (document.getElementById('editPhoneNumber') as HTMLInputElement).value.trim(),
      address: (document.getElementById('editAddress') as HTMLInputElement).value.trim(),
      gender: (document.getElementById('editGender') as HTMLSelectElement).value
    };
  }
  
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  
    if (this.isEditing) {
      this.enableForm();
      this.populateFormFields();
    } else {
      if (!this.validateForm()) {
        this.isEditing = true; 
        return;
      }
  
      this.showConfirmationDialog();
    }
  }
  
  private enableForm(): void {
    const formElements = document.querySelectorAll('.edit-form input, .edit-form select');
    formElements.forEach((input) => {
      (input as HTMLInputElement).disabled = false;
    });
  }
  
  private populateFormFields(): void {
    const fields = {
      'editFirstName': this.customer.fullName,
      'editEmail': this.customer.email,
      'editPhoneNumber': this.customer.phoneNumber,
      'editAddress': this.customer.address,
      'editGender': this.customer.gender,
      'editProfileImg': this.customer.profileImgSrc
    };
  
    Object.entries(fields).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
          element.value = value || '';
        }
      }
    });
  
    const profileImgInput = document.getElementById('editProfileImg') as HTMLInputElement;
    if (profileImgInput) {
      profileImgInput.addEventListener('change', (event) => this.onFileSelected(event));
    }
  }
  
  private validateForm(): boolean {
    const fields = [
      { id: 'editFirstName', name: 'fullName ', value: (document.getElementById('firstName') as HTMLInputElement)?.value.trim() },
      { id: 'editEmail', name: 'Email', value: (document.getElementById('email') as HTMLInputElement)?.value.trim() },
      { id: 'editPhoneNumber', name: 'Phone Number', value: (document.getElementById('phoneNumber') as HTMLInputElement)?.value.trim() },
      { id: 'editAddress', name: 'Address', value: (document.getElementById('address') as HTMLInputElement)?.value.trim() },
      { id: 'editGender', name: 'Gender', value: (document.getElementById('gender') as HTMLSelectElement)?.value }
    ];
  
   
    const emptyField = fields.find(field => !field.value);
    if (emptyField) {
      Swal.fire({
        title: 'Incomplete Form',
        text: `Please fill in the ${emptyField.name} field`,
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'btn btn-primary' }
      });
      return false;
    }
  
    
    const email = fields.find(f => f.id === 'editEmail')!.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: 'Invalid Email',
        text: 'Please enter a valid email address (e.g., user@example.com)',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'btn btn-primary' }
      });
      return false;
    }
  
    
    const phoneNumber = fields.find(f => f.id === 'editPhoneNumber')!.value;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Swal.fire({
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number (e.g., 123-456-7890)',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'btn btn-primary' }
      });
      return false;
    }
  

    const fullName = fields.find(f => f.id === 'editFirstName')!.value;
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(fullName)) {
      Swal.fire({
        title: 'Invalid Name',
        text: 'Name should contain only letters and spaces',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: { confirmButton: 'btn btn-primary' }
      });
      return false;
    }
  
    return true;
  }
  
  private showConfirmationDialog(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save the changes to your profile?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save changes',
      cancelButtonText: 'No, cancel',
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.updateProfile();
      } else {
        this.isEditing = true;
      }
    });
  }
  
  updateProfile(): void {
    this.saveChanges();
  
    Swal.fire({
      title: 'Success!',
      text: 'Profile updated successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: { confirmButton: 'btn btn-primary' },
      timer: 3000 
    }).then(() => {
      this.disableForm();
    });
  }
  
  disableForm(): void {
    const formElements = document.querySelectorAll('.edit-form input, .edit-form select');
    formElements.forEach((input) => {
      (input as HTMLInputElement).disabled = true;
    });
  }
}