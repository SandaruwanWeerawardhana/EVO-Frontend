import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Venue from '../../../model/Venue';
import { NgFor, NgIf } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { EventCardComponent } from "./event-card/event-card.component";
import Supplier from '../../../model/supplier';


@Component({
  selector: 'app-all-events',
  imports: [RouterLink, NgFor, EventCardComponent, NgIf],
  templateUrl: './all-events.component.html',
  styleUrl: './all-events.component.css'
})
export class AllEventsComponent {
  @ViewChild('venueModal') modalElement!: ElementRef;
  currentVenue: Venue | null = null;
  isFirstVar: Boolean = true;

  imageGallery = [
    { "src": "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg" },
    { "src": "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg" },
    { "src": "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg" },
    { "src": "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg" }
  ];




  eventDetails: any = [{
    name: "hi",
    event: {
      eventType: "Wedding",
      budjet: 7500.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates repellat inventore? Ea, delectus soluta veritatis unde magnam expedita blanditiis consequuntur, at sunt aspernatur sint ratione et, sapiente ducimus saepe."
    },
    user: {
      firstName: "kavesha",

    },
    suppliers: [{
      supplierName: "sanjana1",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    },
    {
      supplierName: "sanjana2",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "sanjana3",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "sanjana4",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }]
  }, {
    name: "hi",
    event: {
      eventType: "Wedding",
      budjet: 7500.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates repellat inventore? Ea, delectus soluta veritatis unde magnam expedita blanditiis consequuntur, at sunt aspernatur sint ratione et, sapiente ducimus saepe."
    },
    user: {
      firstName: "kavesha",

    },
    suppliers: [{
      supplierName: "sanjana1",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    },
    {
      supplierName: "sanjana2",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "sanjana3",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "sanjana4",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }]
  }, {
    name: "hi",
    event: {
      eventType: "Wedding",
      budjet: 7500.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates repellat inventore? Ea, delectus soluta veritatis unde magnam expedita blanditiis consequuntur, at sunt aspernatur sint ratione et, sapiente ducimus saepe."
    },
    user: {
      firstName: "kavesha",

    },
    suppliers: [{
      supplierName: "sanjana1",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    },
    {
      supplierName: "sanjana2",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "sanjana3",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "sanjana4",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }]
  }, {
    name: "hi",
    event: {
      eventType: "Wedding",
      budjet: 7500.00,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates repellat inventore? Ea, delectus soluta veritatis unde magnam expedita blanditiis consequuntur, at sunt aspernatur sint ratione et, sapiente ducimus saepe."
    },
    user: {
      firstName: "kavesha",

    },
    suppliers: [{
      supplierName: "kaveesha1",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    },
    {
      supplierName: "kaveesha2",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "kaveesha3",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }, {
      supplierName: "kaveesha3",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
      businessDescription: "lorem",
      businessName: "Alfa"
    }],
  }]





  constructor(private router: Router) { }

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

  isFirst(): Boolean {
    if (this.isFirstVar) {
      this.isFirstVar = false;
      return true;
    }
    return false;
  }

}
