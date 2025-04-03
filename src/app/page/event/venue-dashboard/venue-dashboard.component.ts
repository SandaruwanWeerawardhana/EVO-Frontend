import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import OLD_Venue from '../../../model/Venue';
import { VenuePagePopupComponent } from '../venue-page-popup/venue-page-popup.component';

@Component({
  selector: 'app-venue-dashboard',
  standalone: true,
  imports: [ CommonModule, VenuePagePopupComponent],
  templateUrl: './venue-dashboard.component.html',
  styleUrls: ['./venue-dashboard.component.css']
})
export class VenueDashboardComponent {
  @ViewChild(VenuePagePopupComponent) venuePopup!: VenuePagePopupComponent;

  venues: OLD_Venue[] = [
    {
      id: 1,
      supplierId: 1,
      name: "Shangri-La",
      location: "Panadura",
      type: 'VILLA',
      price: 25000,
      image: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      about: "Luxurious beachfront villa with panoramic ocean views",
      capacity: 150
    },
    {
      id: 2,
      supplierId: 2,
      name: "Tropical Paradise",
      location: "Galle",
      type: 'RESORT',
      price: 35000,
      image: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      about: "A serene resort surrounded by lush greenery",
      capacity: 200
    },
    {
      id: 3,
      supplierId: 3,
      name: "Ocean Breeze",
      location: "Hambantota",
      type: 'BEACH HOUSE',
      price: 40000,
      image: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      about: "A modern beach house with direct access to the ocean",
      capacity: 100
    }
  ];

  showVenuePopup(venue: OLD_Venue): void {
    this.venuePopup.showModal(venue);
  }
}
