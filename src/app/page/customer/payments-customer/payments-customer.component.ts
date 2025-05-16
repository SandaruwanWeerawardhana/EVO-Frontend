import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CustomerPaymentFilter from '../../../model/CustomerPaymentFilter';
import CustomerPayment from '../../../model/CustomerPayment';
import { CustomerReportService } from '../../../../service/user-services/CustomerReportService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments-customer',
  imports: [CommonModule, FormsModule],
  templateUrl: './payments-customer.component.html',
  styleUrl: './payments-customer.component.css',
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
        id: '1',
        date: new Date('2025-03-25').toDateString(),
        businessName: 'Elegant Weddings',
        packageName: 'Platinum Package',
        phoneNumber: '07045234782',
        packagePrice: 35000,
        name: 'Samarakon',
        email: 'samare@gmail.com',
      },
      {
        id: '2',
        date: new Date('2025-04-10').toDateString(),
        businessName: 'Royal Events Co.',
        packageName: 'Gold Deluxe',
        phoneNumber: '0712345678',
        packagePrice: 28000,
        name: 'Jayasinghe',
        email: 'jaya123@gmail.com',
      },
      {
        id: '3',
        date: new Date('2025-05-05').toDateString(),
        businessName: 'Dream Day Planners',
        packageName: 'Silver Basic',
        phoneNumber: '0759876543',
        packagePrice: 18000,
        name: 'Perera',
        email: 'perera.events@gmail.com',
      },
    ];
    this.filteredPayments = [...this.customerPayments];
  }

  getFilteredPayments(): CustomerPayment[] {
    return this.customerPayments.filter((payment) => {
      const matchesSearchCustomer = this.filter.searchCustomer
        ? payment.name
            .toLowerCase()
            .includes(this.filter.searchCustomer.toLowerCase())
        : true;

      const meetsMinAmount =
        this.filter.minAmount !== null
          ? payment.packagePrice >= this.filter.minAmount
          : true;

      const meetsMaxAmount =
        this.filter.maxAmount !== null
          ? payment.packagePrice <= this.filter.maxAmount
          : true;

      let meetsDateRange = true;
      if (this.filter.Date) {
        const paymentDate = new Date(payment.date);
        const startDateObj = new Date(this.filter.Date);
        meetsDateRange = paymentDate >= startDateObj;
      }

      return (
        matchesSearchCustomer &&
        meetsMinAmount &&
        meetsMaxAmount &&
        meetsDateRange
      );
    });
  }

  filter: CustomerPaymentFilter = {
    searchCustomer: '',
    Date: '',
    minAmount: null,
    maxAmount: null,
  };

  // Clear filters
  clearFilters(): void {
    this.filter.searchCustomer = '';
    this.filter.minAmount = null;
    this.filter.maxAmount = null;
    this.filter.Date = '';
  }

  reportEvent(id: string) {
    const customer = this.customerPayments.find((p) => p.id === id);
    if (!customer) {
      console.error('Customer not found with ID:', id);
      return;
    }

    setTimeout(() => {
      const htmlContent = `
     <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice - ${customer.name}</title>
  <style>
    :root {
      --primary-color: #4361ee;
      --secondary-color: #3a0ca3;
      --text-color: #2b2d42;
      --light-gray: #f8f9fa;
      --medium-gray: #e9ecef;
      --border-color: #dee2e6;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      color: var(--text-color);
      line-height: 1.6;
      background-color: #fff;
      padding: 0;
      margin: 0;
    }
    
    .invoice-container {
      max-width: 700px;
      margin: 0 auto;
      padding: 40px;
      border: 1px solid var(--border-color);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      background-color: white;
    }
    
    .invoice-header {
      text-align: center;
      justify-content: space-between;
      align-items: center
      padding-bottom: 30px;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 30px;
    }
    
    .company-details {
      margin-bottom: 20px;
    }
    
    .company-name {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 5px;
    }
    
    .invoice-title {
      color: var(--secondary-color);
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-align: center;
    }
    
    .invoice-details {
      background-color: var(--light-gray);
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 30px;
    }
    
    .invoice-details-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    
    .invoice-details-label {
      font-weight: 600;
      color: var(--secondary-color);
    }
    
    .customer-info {
      margin-bottom: 30px;
      padding: 15px;
      background-color: var(--light-gray);
      border-radius: 5px;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
      color: var(--primary-color);
      position: relative;
      padding-left: 15px;
    }
    
    .section-title:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 5px;
      background-color: var(--primary-color);
      border-radius: 2px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    
    th {
      background-color: var(--primary-color);
      color: white;
      font-weight: 600;
      text-align: left;
      padding: 12px 15px;
    }
    
    td {
      padding: 12px 15px;
      border-bottom: 1px solid var(--border-color);
    }
    
    tr:nth-child(even) {
      background-color: var(--light-gray);
    }
    
    .total-section {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
    }
    
    .total-container {
      width: 300px;
      border-top: 2px solid var(--primary-color);
      padding-top: 10px;
    }
    
    .total-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
    }
    
    .total-label {
      font-weight: 600;
    }
    
    .grand-total {
      font-size: 20px;
      font-weight: 700;
      background-color: var(--primary-color);
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    
    .footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
      color: #6c757d;
      font-size: 14px;
    }
    
    .actions {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 40px;
    }
    
    .btn {
      padding: 12px 25px;
      border-radius: 5px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    
    .btn-primary {
      background-color: var(--primary-color);
      color: white;
    }
    
    .btn-primary:hover {
      background-color: var(--secondary-color);
    }
    
    .btn-secondary {
      background-color: var(--light-gray);
      color: var(--text-color);
    }
    
    .btn-secondary:hover {
      background-color: var(--medium-gray);
    }
    
    @media print {
      .actions {
        display: none;
      }
      
      body {
        background-color: white;
      }
      
      .invoice-container {
        box-shadow: none;
        border: none;
        padding: 0;
      }
    }

    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    
    .loading-spinner {
      border: 4px solid var(--light-gray);
      border-top: 4px solid var(--primary-color);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
    }
    
    .loading-text {
      margin-top: 10px;
      font-weight: 600;
      color: var(--primary-color);
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .qr-code {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .qr-code img {
      height: 100px;
      width: 100px;
    }
  </style>
</head>
<body>
  <div class="invoice-container">
    <div class="invoice-header">
       <div class="invoice-title">Invoice</div>
    </div>


    <div class="customer-info">
      <h3 class="section-title">Customer Information</h3>
      <div>
        <strong>Name:</strong> ${customer.name}
      </div>
      <div>
        <strong>Email:</strong> ${customer.email}
      </div>
      <div>
        <strong>Phone:</strong> ${customer.phoneNumber}
      </div>
      <div>
        <strong>Business Name:</strong> ${customer.businessName}
      </div>
    </div>
  
    <h3 class="section-title">Package Details</h3>
    <table>
      <thead>
        <tr>
          <th>Package</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${customer.packageName}</td>
          <td>LKR ${customer.packagePrice.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  
    <div class="total-section">
      <div class="total-container">
        <div class="total-row">
          <span class="total-label">Subtotal:</span>
          <span>LKR ${customer.packagePrice.toLocaleString()}</span>
        </div>
        <div class="total-row">
          <span class="total-label">Tax (0%):</span>
          <span>LKR 0.00</span>
        </div>
        <div class="grand-total">
          <span>Total Amount:</span>
          <span>LKR ${customer.packagePrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  
    <div class="footer">
      <p>Thank you for choosing Evo Plan. We value your Event!</p>
      <p>&copy; ${new Date().getFullYear()} Evo Plan. All rights reserved.</p>
    </div>
    
    <div class="actions">
      <button class="btn btn-primary" onclick="window.print()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        Download PDF
      </button>
    </div>
  </div>

</body>
</html>
    `;

      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }, 2000);
  }
}
