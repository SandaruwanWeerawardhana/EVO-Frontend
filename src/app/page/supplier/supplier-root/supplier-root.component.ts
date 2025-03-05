import { Component } from '@angular/core';
import { ProfileViewComponent } from "../profile-view/profile-view.component";
import { RouterOutlet } from '@angular/router';
import { AddPreviousComponent } from "../add-previous/add-previous.component";
import { PhotographerPackagesComponent } from "../photographer-packages/photographer-packages.component";
import { RatingReviewsComponent } from '../rating-reviews/rating-reviews.component';
import { ViewPreviousWorkComponent } from '../view-previous-work/view-previous-work.component';

@Component({
  selector: 'app-supplier-root',
  imports: [AddPreviousComponent, PhotographerPackagesComponent,RatingReviewsComponent,ViewPreviousWorkComponent,ProfileViewComponent],
  templateUrl: './supplier-root.component.html',
  styleUrl: './supplier-root.component.css'
})
export class SupplierRootComponent {

}
