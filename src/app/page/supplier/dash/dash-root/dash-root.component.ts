import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dash-root',
  imports: [],
  templateUrl: './dash-root.component.html',
  styleUrl: './dash-root.component.css'
})
export class DashRootComponent {
  ngAfterViewInit() {
    this.loadBarChart();
    this.loadPieChart();
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