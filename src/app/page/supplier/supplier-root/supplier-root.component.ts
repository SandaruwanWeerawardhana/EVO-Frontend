import { Component } from '@angular/core';
import { AddPreviousComponent } from "../add-previous/add-previous.component";
import { PhotographerPackagesComponent } from "../photographer-packages/photographer-packages.component";
import { RatingReviewsComponent } from '../rating-reviews/rating-reviews.component';
import { BookingEventComponent } from '../booking-event/booking-event.component';

@Component({
  selector: 'app-supplier-root',
<<<<<<< HEAD
  imports: [RatingReviewsComponent,BookingEventComponent],
=======
  imports: [AddPreviousComponent, PhotographerPackagesComponent,RatingReviewsComponent],
>>>>>>> 9504c07670475b3684f0dc38e9086415d38b547b
  templateUrl: './supplier-root.component.html',
  styleUrl: './supplier-root.component.css'
})
export class SupplierRootComponent {

}
