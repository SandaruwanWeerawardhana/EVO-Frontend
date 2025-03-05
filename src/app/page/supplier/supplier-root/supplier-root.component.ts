import { Component } from '@angular/core';
import { RatingReviewsComponent } from '../rating-reviews/rating-reviews.component';
import { BookingEventComponent } from '../booking-event/booking-event.component';

@Component({
  selector: 'app-supplier-root',
  imports: [RatingReviewsComponent,BookingEventComponent],
  templateUrl: './supplier-root.component.html',
  styleUrl: './supplier-root.component.css'
})
export class SupplierRootComponent {

}
