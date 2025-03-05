import { Component } from '@angular/core';
import { CustomerDashboardComponent } from "../customer-dashboard/customer-dashboard.component";

@Component({
  selector: 'app-user-root',
  imports: [CustomerDashboardComponent],
  templateUrl: './user-root.component.html',
  styleUrl: './user-root.component.css'
})
export class UserRootComponent {

}
