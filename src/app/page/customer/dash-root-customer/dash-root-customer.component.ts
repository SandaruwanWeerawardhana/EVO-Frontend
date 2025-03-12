// src/app/page/customer/dash-root-customer/dash-root-customer.component.ts
import { Component , AfterViewInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { Chart, LinearScale, CategoryScale, BarElement, BarController } from 'chart.js/auto';
Chart.register(LinearScale, CategoryScale, BarElement, BarController);

type Event = {
  name: string;
  date: string;
  status: string;
}

type Archives = {
  type: string;
  date: string;
  status: string;
  description: string;  
}

@Component({
  selector: 'app-dash-root-customer',
  imports: [NgFor],
  templateUrl: './dash-root-customer.component.html',
  styleUrl: './dash-root-customer.component.css'
})
export class DashRootCustomerComponent implements AfterViewInit  {

  archiveApprovedStyle:string = "badge evo-bg-approved evo-green-text px-3 py-1 rounded-pill";

  archivePendingStyle:string = "badge bg-warning evo-green-text px-3 py-1 rounded-pill";

  limit:number = 4;

  limitedEvents:Event[]=[];

  events:Event[] = [
    {
      name: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Pending"
    },
    {
      name: "Parents Anniversary Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Pending"
    },
    {
      name: "Baby's Birthday",
      date: new Date("2025-03-25").toDateString(),
      status: "Pending"
    },
    {
      name: "Get Together",
      date: new Date("2025-03-25").toDateString(),
      status: "Pending"
    },
    {
      name: "Wedding",
      date: new Date("2025-03-25").toDateString(),
      status: "Pending"
    }
  ];

  archives: Archives[] = [
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Approved",
      description: "Gold Plan"
    },
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Pending",
      description: "Gold Plan"
    },
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Rejected",
      description: "Gold Plan"
    },
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Approved",
      description: "Gold Plan"
    },
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Approved",
      description: "Gold Plan"
    },
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Approved",
      description: "Gold Plan"
    },
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Approved",
      description: "Gold Plan"
    },
    {
      type: "Birthday Party",
      date: new Date("2025-03-25").toDateString(),
      status: "Approved",
      description: "Gold Plan"
    },
  ];

  constructor() {
    this.limitedEvents = this.events.slice(0, this.limit);
  }

 
  ngAfterViewInit(): void {
 
    new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: ['Pending', 'Approved', 'Rejected'], // Adjust labels for doughnut slices
        datasets: [{
          label: 'Event Status',
          data: [10, 20, 5], // Sample data - update with your actual values if needed
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        // },
        cutout: '80%',
        plugins: {
          legend: {
            position: 'right'
          }
        },
        maintainAspectRatio: false
        
      }
    });
  }
  
}
