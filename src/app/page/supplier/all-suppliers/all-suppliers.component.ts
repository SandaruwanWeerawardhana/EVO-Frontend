import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Supplier from '../../../../model/Supplier'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-suppliers',
  imports: [RouterLink,CommonModule],
  templateUrl: './all-suppliers.component.html',
  styleUrl: './all-suppliers.component.css'
})
export class AllSuppliersComponent {

  suppliers: Supplier[] = [
    new Supplier(
      1,
      101,
      'FrameCrafters',
      'Photography',
      'framecrafters@example.com',
      '123-456-7890',
      'Capturing authentic, emotive portraits that showcase personality and connection.',
      'https://framecrafters.com',
      'https://images.pexels.com/photos/16120232/pexels-photo-16120232/free-photo-of-tables-in-wedding-reception-venue.jpeg?auto=compress&cs=tinysrgb&w=600',
      5
    ),
    new Supplier(
      2,
      102,
      'Catering Delight',
      'Catering',
      'cateringdelight@example.com',
      '987-654-3210',
      'Delicious and diverse catering services for all events.',
      'https://cateringdelight.com',
      'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=600',
      4.5
    ),
    new Supplier(
      3,
      103,
      'Decor Magic',
      'Decor',
      'decormagic@example.com',
      '555-123-4567',
      'Transforming spaces with creative and elegant decor.',
      'https://decormagic.com',
      'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=600',
      4.8
    ),
    new Supplier(
      4,
      104,
      'Beauty Essentials',
      'Beauty',
      'beautyessentials@example.com',
      '111-222-3333',
      'Providing top-notch beauty services for your special day.',
      'https://beautyessentials.com',
      'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
      4.7
    ),
    new Supplier(
      5,
      105,
      'Event Planners',
      'Event Planning',
      'eventplanners@example.com',
      '444-555-6666',
      'Professional event planning to make your day unforgettable.',
      'https://eventplanners.com',
      'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      4.9
    ),
    new Supplier(
      6,
      106,
      'Music Masters',
      'Entertainment',
      'musicmasters@example.com',
      '777-888-9999',
      'Live music and entertainment to elevate your event.',
      'https://musicmasters.com',
      'https://images.pexels.com/photos/1301898/pexels-photo-1301898.jpeg?auto=compress&cs=tinysrgb&w=600',
      4.6
    )
  ];
}