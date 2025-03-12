import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dash-root',
  imports: [HttpClientModule],
  templateUrl: './dash-root.component.html',
  styleUrl: './dash-root.component.css'
})
export class DashRootComponent implements OnInit {
  ngAfterViewInit() {
    this.loadBarChart();
    this.loadPieChart();
  }

  constructor(private http:HttpClient){

  }

  postArray:any[]=[];

  ngOnInit(): void {
      this.loadWorks();
      this.loadRatings();
      this.loadCustomers();
  }

  loadWorks() {
    this.http.get<any[]>('https://3309-112-134-151-168.ngrok-free.app/supplier/previous-work/get-all')
      .subscribe({
        next: (res) => {
          this.postArray = res; 
        }
      });
  }
 loadRatings() {
    this.http.get<any[]>('https://3309-112-134-151-168.ngrok-free.app/review/get-all')
      .subscribe({
        next: (res) => {
          this.postArray = res; 
        }
      });
  }
  loadCustomers() {
    this.http.get<any[]>('https://3309-112-134-151-168.ngrok-free.app/userController/users')
      .subscribe({
        next: (res) => {
          this.postArray = res
            .filter(user => user.userType === 'customer')
            .sort((a, b) => a.userType.localeCompare(b.userType));
          console.log('Filtered and Sorted Users:', this.postArray);
        },
        error: (err) => {
          console.error('Error fetching users:', err);
        }
      });
  }
  

  loadBarChart() {
    const barChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
          label: "Daily Logins",
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: "rgba(75, 192, 192, 0.6)"
        }]
      }
    });
  }

  loadPieChart() {
    const pieChart = new Chart("pieChart", {
      type: "pie",
      data: {
        labels: ["Basic", "Premium", "Exclusive"],
        datasets: [{
          label: "Popularity",
          data: [30, 45, 25],
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"]
        }]
      }
    });
  }
}