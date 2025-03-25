import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Venue from '../../../model/Venue';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-venue-page-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './venue-page-popup.component.html',
  styleUrls: ['./venue-page-popup.component.css']
})
export class VenuePagePopupComponent {
  @ViewChild('venueModal') modalElement!: ElementRef;
  currentVenue: Venue | null = null;

  public imageGallery = [
    { "src": "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg" },
    { "src": "https://cdn.pixabay.com/photo/2013/12/11/13/49/holiday-226830_1280.jpg"},
    { "src": "https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878058_1280.jpg" }
  ];

  constructor(private router: Router) {}

  showModal(venue: Venue): void {
    this.currentVenue = venue;
    const modal = new bootstrap.Modal(this.modalElement.nativeElement);
    modal.show();
  }

  bookNow(): void {
    if (this.currentVenue) {

        this.router.navigate(['/event/event-summery']);

    }
  }
}
