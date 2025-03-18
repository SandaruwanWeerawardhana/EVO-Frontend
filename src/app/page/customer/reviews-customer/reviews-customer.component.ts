import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Review } from '../../../../model/Review';


@Component({
  selector: 'app-reviews-customer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reviews-customer.component.html',
  styleUrls: ['./reviews-customer.component.css'],
})
export class ReviewsCustomerComponent {
  reviews: Review[] = [
    new Review(
      1,
      'Sarah Thompson',
      '12-09-2024',
      "Frank's photos of our family reunion were fantastic! He has a knack for capturing genuine moments and made everyone feel at ease. We're thrilled with the results!",
      5
    ),
    new Review(
      2,
      'John Doe',
      '11-08-2024',
      'Great experience! Highly recommended.',
      4
    ),
  ];

  editedReview: any = null;
  isPopupOpen: boolean = false;

  openPopup(review: any) {
    this.editedReview = { ...review }; // Create a copy to edit
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  saveComment() {
    const index = this.reviews.findIndex((r) => r.id === this.editedReview.id);
    if (index !== -1) {
      this.reviews[index] = { ...this.editedReview };
    }
    this.isPopupOpen = false;
  }

  deleteReview(id: number) {
    this.reviews = this.reviews.filter((review) => review.id !== id);
  }
}
