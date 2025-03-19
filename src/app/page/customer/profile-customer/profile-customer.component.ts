import { Component } from '@angular/core';
import ProfileCustomer from '../../../model/ProfileCustomer';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-customer',
  imports: [NgFor],
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent {

  customer :ProfileCustomer =
    {
      "id": 1,
      "fullName": "Ruvindu Sharadha",
      "email": "ruvindusharadha22@gmail.com",
      "phoneNumber": "0789527369",
      "address": "Nuwara Eliya",
      "gender": "Male"
    }





}
