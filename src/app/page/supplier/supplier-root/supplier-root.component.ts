import { Component } from '@angular/core';
import { ProfileViewComponent } from "../dash/profile-view/profile-view.component";
import { RouterOutlet } from '@angular/router';
import { AddPreviousComponent } from "../dash/add-previous/add-previous.component";

import { RatingReviewsComponent } from '../rating-reviews/rating-reviews.component';
import { BookingEventComponent } from '../dash/booking-event/booking-event.component';
import { SideBarComponent } from "../common/side-bar/side-bar.component";
import { NavBarComponent } from "../../../common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-supplier-root',
  imports: [SideBarComponent, RouterOutlet, NavBarComponent],
  templateUrl: './supplier-root.component.html',
  styleUrl: './supplier-root.component.css'
})
export class SupplierRootComponent {

}
