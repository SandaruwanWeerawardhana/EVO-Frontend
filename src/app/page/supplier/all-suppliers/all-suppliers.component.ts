import { Component, OnInit } from '@angular/core';
import Supplier from '../../../model/supplier';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupplierService } from '../../../../service/supplier-services/supplierService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-suppliers',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './all-suppliers.component.html',
  styleUrls: ['./all-suppliers.component.css'],
})
export class AllSuppliersComponent implements OnInit {
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
    ),
  ];

  filteredSuppliers: Supplier[] = [];
  popularity: string = 'Most Popular';
  budget: string = 'Any Budget';
  serviceType: string = 'All Services';
  searchQuery: string = '';

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.supplierService.getAllSuppliers().subscribe(
      (data: Supplier[]) => {
        this.suppliers = data.length ? data : this.suppliers;
        this.filteredSuppliers = [...this.suppliers];
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
        this.filteredSuppliers = [...this.suppliers];
      }
    );
  }

  applyFilters(): void {
    let result = [...this.suppliers];

    if (this.serviceType !== 'All Services') {
      result = result.filter(s => s.userType === this.serviceType);
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(s => 
        s.businessName.toLowerCase().includes(query) ||
        s.businessDescription.toLowerCase().includes(query)
      );
    }

    if (this.budget !== 'Any Budget') {
      result = result.filter(s => {
        if (this.budget === 'Low') return s.supplierId <= 2;
        if (this.budget === 'Medium') return s.supplierId > 2 && s.supplierId <= 4;
        if (this.budget === 'High') return s.supplierId > 4;
        return true;
      });
    }

    if (this.popularity === 'Most Popular') {
      result.sort((a, b) => b.supplierId - a.supplierId); 
    } else if (this.popularity === 'Least Popular') {
      result.sort((a, b) => a.supplierId - b.supplierId);
    }

    this.filteredSuppliers = result;
  }
}