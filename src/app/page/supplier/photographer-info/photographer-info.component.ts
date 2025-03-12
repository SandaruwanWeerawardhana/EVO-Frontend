import { Component, OnInit } from '@angular/core';
import { RatingReviewsComponent } from "../rating-reviews/rating-reviews.component";
import { HttpClient } from '@angular/common/http';
import PhotographerReview from '../../../../model/PhotographerReview';
import PhotographerExtraFeature from '../../../../model/PhotographerExtraFeature';
import PhotographerImage from '../../../../model/PhotographerImage';
import PhotographerPackage from '../../../../model/PhotographerPackage';
import { CommonModule } from '@angular/common';
import PhotographerBasicInfo from '../../../../model/PhotographerBasicInfo';
@Component({
  selector: 'app-photographer-info',
  imports: [RatingReviewsComponent,CommonModule],
  templateUrl: './photographer-info.component.html',
  styleUrl: './photographer-info.component.css'
})
export class PhotographerInfoComponent implements OnInit{
  ngOnInit(): void {
    if (this.packages?.length > 0) {
      this.selectedPackage = this.packages[0].name;
    }
  }

  total_charges: number = 0;
  selectedPackage: string = '';


  basicinfo: PhotographerBasicInfo = {"title": "John Doe Photography", "rating": "five", "orders": 120, "description": "Professional wedding photographer"}

  features: PhotographerExtraFeature[] = [
    {"id": 1, "feature": "Drone Photography", "price": 300},
    {"id": 2, "feature": "Photo Album", "price": 150},
    {"id": 3, "feature": "HD Video Recording", "price": 500},
    {"id": 4, "feature": "Instant Prints", "price": 100},
    {"id": 5, "feature": "Extra Photographer", "price": 700}
  ];

  images: PhotographerImage[] = [
    {"id": 1, "imageUrl": "https://i.pcmag.com/imagery/articles/07JoQVzt3zX0eQVLPDV0HyK-28..v1672948002.jpg"},
    {"id": 2, "imageUrl": "https://i.pcmag.com/imagery/articles/07JoQVzt3zX0eQVLPDV0HyK-28..v1672948002.jpg"},
    {"id": 3, "imageUrl": "https://i.pcmag.com/imagery/articles/07JoQVzt3zX0eQVLPDV0HyK-28..v1672948002.jpg"},
    {"id": 4, "imageUrl": "https://i.pcmag.com/imagery/articles/07JoQVzt3zX0eQVLPDV0HyK-28..v1672948002.jpg"},
    {"id": 5, "imageUrl": "https://i.pcmag.com/imagery/articles/07JoQVzt3zX0eQVLPDV0HyK-28..v1672948002.jpg"}
  ];

  packages: PhotographerPackage[] = [
    {"id": 1, "name": "Wedding Package", "price": 2500, "description": "Full day wedding coverage",items:["4 hours of coverage","2 photographers","100 edited photos","1 photo album"]},
    {"id": 2, "name": "Portrait Session", "price": 5000, "description": "1-hour portrait session",items:["10 hour of coverage","5 photographer","200 edited photos","2 photo album"]},
    {"id": 3, "name": "Corporate Event", "price": 3000, "description": "Professional coverage for business events",items:["6 hours of coverage","8 photographers","300 edited photos","1 photo album"]}
  ];

  reviews: PhotographerReview[] = [
    {"reviewId": 1, "rating": "five", "date": "2024-03-10", "comment": "Amazing service!"},
    {"reviewId": 2, "rating": "four", "date": "2024-03-08", "comment": "Great photos, highly recommend!"}
  ];



}


