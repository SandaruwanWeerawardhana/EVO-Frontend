import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Supplier from '../../../model/supplier';
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
      'FrameCrafters',
      'Photography',
      'securePass123',
      'framecrafters@example.com',
      new Date('2023-01-15'),
      'FrameCrafters',
      'Capturing authentic, emotive portraits that showcase personality and connection.',
      '123-456-7890',
      'https://framecrafters.com',
      'https://images.pexels.com/photos/16120232/pexels-photo-16120232/free-photo-of-tables-in-wedding-reception-venue.jpeg?auto=compress&cs=tinysrgb&w=600'
  ),
  new Supplier(
      2,
      'Catering Delight',
      'Catering',
      'delightPass456',
      'cateringdelight@example.com',
      new Date('2022-11-20'),
      'Catering Delight',
      'Delicious and diverse catering services for all events.',
      '987-654-3210',
      'https://cateringdelight.com',
      'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=600'
  ),
  new Supplier(
      3,
      'Decor Magic',
      'Decor',
      'magicPass789',
      'decormagic@example.com',
      new Date('2021-08-10'),
      'Decor Magic',
      'Transforming spaces with creative and elegant decor.',
      '555-123-4567',
      'https://decormagic.com',
      'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=600'
  ),
  new Supplier(
      4,
      'Beauty Essentials',
      'Beauty',
      'beautyPass321',
      'beautyessentials@example.com',
      new Date('2023-05-30'),
      'Beauty Essentials',
      'Providing top-notch beauty services for your special day.',
      '111-222-3333',
      'https://beautyessentials.com',
      'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg'
  ),
  new Supplier(
      5,
      'Event Planners',
      'Event Planning',
      'eventPass654',
      'eventplanners@example.com',
      new Date('2020-09-25'),
      'Event Planners',
      'Professional event planning to make your day unforgettable.',
      '444-555-6666',
      'https://eventplanners.com',
      'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ),
  new Supplier(
      6,
      'Music Masters',
      'Entertainment',
      'musicPass987',
      'musicmasters@example.com',
      new Date('2019-07-18'),
      'Music Masters',
      'Live music and entertainment to elevate your event.',
      '777-888-9999',
      'https://musicmasters.com',
      'https://images.pexels.com/photos/1301898/pexels-photo-1301898.jpeg?auto=compress&cs=tinysrgb&w=600'
  )
  ];
}
