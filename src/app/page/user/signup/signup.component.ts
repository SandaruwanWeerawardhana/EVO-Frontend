import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import User from '../../../../model/User';
import Supplier from '../../../../model/supplier';
import { SupabaseService } from '../../../../service/supabase.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  selectedButtonName: string = 'Customer';
  supplierRegPage: number = 1;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeTerms: boolean = false;

  businessName: string = '';
  businessDescription: string = '';
  mobileNumber: string = '';
  website: string = '';
  selectedFile: File | null = null;
  uploadedFileUrl: string = '';
  isUploading: boolean = false;

  onButtonClick(buttonName: string) {
    this.selectedButtonName = buttonName;
    this.resetFormFields();

    if (buttonName === 'Supplier') {
      this.supplierRegPage = 1;
    }
  }

  resetFormFields() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.agreeTerms = false;

    this.businessName = '';
    this.businessDescription = '';
    this.mobileNumber = '';
    this.website = '';
    this.selectedFile = null;
    this.uploadedFileUrl = '';
  }

  validateBasicInfo(): boolean {
    if (!this.firstName || !this.lastName) {
      Swal.fire({
        title: 'Error',
        text: 'First Name and Last Name are required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email || !emailRegex.test(this.email)) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (!this.password || this.password.length < 8) {
      Swal.fire({
        title: 'Error',
        text: 'Password must be at least 8 characters long.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (this.password !== this.confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Passwords do not match.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (!this.agreeTerms) {
      Swal.fire({
        title: 'Error',
        text: 'You must agree to the terms and conditions.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    return true;
  }

  validateSupplierBusinessInfo(): boolean {
    if (!this.businessName) {
      Swal.fire({
        title: 'Error',
        text: 'Business Name is required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (!this.businessDescription) {
      Swal.fire({
        title: 'Error',
        text: 'Business Description is required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (!this.mobileNumber) {
      Swal.fire({
        title: 'Error',
        text: 'Mobile Number is required.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    if (!this.selectedFile) {
      Swal.fire({
        title: 'Error',
        text: 'Please upload a Business Verification Document.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    return true;
  }

  onSupplierNextButtonClick(page: number) {
    if (page === 2) {
      if (this.validateBasicInfo()) {
        this.supplierRegPage = page;
      }
    } else {
      this.supplierRegPage = page;
    }
  }

  onCustomerSignUpButtonClicked() {
    if (this.validateBasicInfo()) {
      const user = new User(
        0,
        `${this.firstName} ${this.lastName}`,
        'Customer',
        this.password,
        this.email,
        new Date()
      );

      console.log('New User object created:', user);

      // API integration

      Swal.fire({
        title: "Successfully Registered",
        text: "You have successfully registered and can now start planning your events. Enjoy your experience with us!",
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {

          // Dashboard Navigation when API returns true

          this.resetFormFields();
        }
      });
    }
  }

  async onSupplierSignUpButtonClicked() {
    if (!this.validateBasicInfo() || !this.validateSupplierBusinessInfo()) {
      return;
    }

    this.isUploading = true;

    try {
      await this.uploadFileToSupabase();

      // userId: number,
      // profileId: number,
      // businessName: string,
      // SupplierType: string,
      // email: string,
      // password:string,
      // phoneNumber: string,
      // description: string,
      // website: string,
      // imgUrl: string,
      // rating: number,
      // uploadedFileUrl:string

      const supplier = new Supplier(
        0,
        0,
        `${this.firstName} ${this.lastName}`,
        'Supplier',
        this.email,
        this.password,
        this.mobileNumber,
        this.businessDescription,
        this.website,
        "",
        2,
        this.uploadedFileUrl
      );

      console.log('New Supplier object created:', supplier);

      // API Integration

      Swal.fire({
        title: "Successfully Signed Up!",
        text: "Your supplier account has been created and submitted for review. We will notify you of the status via email.",
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetFormFields();
          this.supplierRegPage = 1;
          this.selectedButtonName = 'Customer';

          // Dashboard Navigation when API returns true
        }
      });
    } catch (error) {
      console.error('Error during supplier registration:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to complete registration. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } finally {
      this.isUploading = false;
    }
  }

  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];

      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(this.selectedFile.type)) {
        Swal.fire({
          title: 'Error',
          text: 'Please select a PDF, JPEG, or PNG file.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        this.selectedFile = null;
        event.target.value = null;
        return;
      }

      const maxSizeInBytes = 20 * 1024 * 1024;
      if (this.selectedFile.size > maxSizeInBytes) {
        Swal.fire({
          title: 'Error',
          text: 'File size exceeds 20MB limit.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        this.selectedFile = null;
        event.target.value = null;
        return;
      }
    }
  }

  constructor(private supabase: SupabaseService) { }

  private async uploadFileToSupabase(): Promise<void> {
    if (!this.selectedFile) {
      throw new Error('No file selected');
    }

    const bucketName = 'EvoBRs';
    const timestamp = new Date().getTime();
    const uniqueFileName = `${timestamp}_${this.selectedFile.name}`;
    const filePath = `uploads/${uniqueFileName}`;

    try {
      const data = await this.supabase.uploadFile(bucketName, filePath, this.selectedFile);
      console.log('File uploaded successfully:', data);
      this.uploadedFileUrl = this.supabase.getFileUrl(bucketName, filePath);
      console.log('File URL:', this.uploadedFileUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new Error('Failed to upload file');
    }
  }
}
