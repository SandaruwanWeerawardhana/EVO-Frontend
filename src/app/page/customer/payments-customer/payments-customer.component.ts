import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CustomerPaymentFilter from '../../../model/CustomerPaymentFilter';
import CustomerPayment from '../../../model/CustomerPayment';
import {CustomerReportService} from '../../../../service/user-services/CustomerReportService';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payments-customer',
  imports: [CommonModule, FormsModule],
  templateUrl: './payments-customer.component.html',
  styleUrl: './payments-customer.component.css'
})
export class PaymentsCustomerComponent {

    customerPayments: CustomerPayment[] = [];
  filteredPayments: CustomerPayment[] = [];
  constructor(
    private http: HttpClient, 
    private paymentService: CustomerReportService
  ) {
    this.customerPayments = [
      {
        id: "1",
        date: new Date("2025-03-25").toDateString(),
        businessName: "Elegant Weddings",
        packageName: "Platinum Package",
        phoneNumber: "07045234782",
        packagePrice: 35000,
        name: "Samarakon",
        email: "samare@gmail.com"
      },

    ];
    this.filteredPayments = [...this.customerPayments];
  }

  getFilteredPayments(): CustomerPayment[] {
    return this.customerPayments.filter(payment => {
      const matchesSearchCustomer = this.filter.searchCustomer ?
        payment.name.toLowerCase().includes(this.filter.searchCustomer.toLowerCase()) :
        true;

      const meetsMinAmount = this.filter.minAmount !== null ?
        payment.packagePrice >= this.filter.minAmount :
        true;

      const meetsMaxAmount = this.filter.maxAmount !== null ?
        payment.packagePrice <= this.filter.maxAmount :
        true;

      let meetsDateRange = true;
      if (this.filter.Date) {
        const paymentDate = new Date(payment.date);
        const startDateObj = new Date(this.filter.Date);
        meetsDateRange = paymentDate >= startDateObj;
      }

      return matchesSearchCustomer && meetsMinAmount && meetsMaxAmount && meetsDateRange;
    });
  }

  filter: CustomerPaymentFilter = {
    searchCustomer: '',
    Date: '',
    minAmount: null,
    maxAmount: null
  }



  // Clear filters
  clearFilters(): void {
    this.filter.searchCustomer = '';
    this.filter.minAmount = null;
    this.filter.maxAmount = null;
    this.filter.Date = '';
  }

  reportEvent(id:string){
    this.paymentService.reportEvent(id).subscribe({
      next: (data: CustomerPayment[]) => {
        console.log('Received customer payments:', data);
        this.filteredPayments = [...data];
      },
      error: (error) => {
        console.error('Error fetching report data:', error);
      }
    });
  }

  saveAsBlob(data: Blob){
    var blob = new Blob([data], { type:  'application/pdf' });
    var url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
