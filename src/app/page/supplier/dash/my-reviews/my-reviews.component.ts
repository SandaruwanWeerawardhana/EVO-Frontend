import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Review {
  name: string;
  avatar: string;
  rating: number;
  date: Date;
  title: string;
  content: string;
  helpfulCount: number;
}

@Component({
  selector: 'app-my-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent {
  showModal = false;
  reviews: Review[] = [
    {
      name: 'Carmen Chong',
      avatar: '/assets/girlMsgProfile1.jpg',
      rating: 5,
      date: new Date('2023-03-15'),
      title: 'Excellent product quality',
      content: 'The product exceeded my expectations. The quality is outstanding and it arrived earlier than expected.',
      helpfulCount: 24
    },
    {
      name: 'Florencio Dorrance',
      avatar: '/assets/girlMsgProfile2.jpg',
      rating: 4,
      date: new Date('2023-03-10'),
      title: 'Good but could be better',
      content: 'Overall a good product, but the packaging was damaged during shipping.',
      helpfulCount: 8
    },
    {
      name: 'Hannia Navadil',
      avatar: '/assets/girlMsgProfile3.jpg',
      rating: 3,
      date: new Date('2023-03-05'),
      title: 'Average experience',
      content: 'The product is okay for the price, but I expected better quality.',
      helpfulCount: 3
    }
  ];

newReview: Review = {
  name: 'You',
  avatar: '/assets/default-avatar.jpg',
  rating: 0,
  date: new Date(),
  title: '',
  content: '',
  helpfulCount: 0
};

  get averageRating(): number {
    if (this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / this.reviews.length;
  }

  get reviewsThisMonth(): number {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return this.reviews.filter(review => 
      review.date.getMonth() === currentMonth && 
      review.date.getFullYear() === currentYear
    ).length;
  }

  addReview() {
    if (this.newReview.rating && this.newReview.title && this.newReview.content) {
      const review: Review = {
        name: 'You',
        avatar: '/assets/default-avatar.jpg',
        rating: this.newReview.rating,
        date: new Date(),
        title: this.newReview.title,
        content: this.newReview.content,
        helpfulCount: 0
      };
      
      this.reviews.unshift(review);
      this.resetForm();
      this.showModal = false;
    }
  }

  private resetForm() {
    this.newReview = {
      name: 'You',
      avatar: '/assets/default-avatar.jpg',
      rating: 0,
      date: new Date(),
      title: '',
      content: '',
      helpfulCount: 0
    };
  }
}