import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../../../../app.component';
import { DashRootCustomerComponent } from '../../../customer/dash-root-customer/dash-root-customer.component';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
