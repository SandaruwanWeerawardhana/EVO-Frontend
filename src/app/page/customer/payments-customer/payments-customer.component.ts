import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type CustomerPayment = {
  date: string;
  transactionId: string;
  supplier: string;
  supplierType: string;
  amount: number;
  remarks: string;
}

@Component({
  selector: 'app-payments-customer',
  imports: [CommonModule],
  templateUrl: './payments-customer.component.html',
  styleUrl: './payments-customer.component.css'
})
export class PaymentsCustomerComponent {
  customerPayments: CustomerPayment[] = [
    {
      date: new Date("2025-03-25").toDateString(),
      transactionId: "T1",
      supplier: "Supplier 1",
      supplierType: "Type 1",
      amount: 35000,
      remarks: "remark 1"
    },
    {
      date: new Date("2025-03-26").toDateString(),
      transactionId: "T1",
      supplier: "Supplier 1",
      supplierType: "Type 1",
      amount: 35000,
      remarks: "Remark 1"
    },
    {
      date: new Date("2025-04-25").toDateString(),
      transactionId: "T2",
      supplier: "Supplier 2",
      supplierType: "Type 2",
      amount: 45000,
      remarks: "Remark 2"
    },
    {
      date: new Date("2025-04-25").toDateString(),
      transactionId: "T3",
      supplier: "Supplier 3",
      supplierType: "Type 3",
      amount: 55000,
      remarks: "Remark 3"
    },
    {
      date: new Date("2025-04-25").toDateString(),
      transactionId: "T4",
      supplier: "Supplier 4",
      supplierType: "Type 4",
      amount: 60000,
      remarks: "Remark 4"
    },
    {
      date: new Date("2025-04-25").toDateString(),
      transactionId: "T5",
      supplier: "Supplier 5",
      supplierType: "Type 5",
      amount: 70000,
      remarks: "Remark 5"
    }
  ]
}
