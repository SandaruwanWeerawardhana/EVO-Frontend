import { Component, OnInit } from '@angular/core';
import Supplier from '../../../model/supplier';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SupplierService } from '../../../../service/supplier-services/supplierService';

@Component({
  selector: 'app-all-suppliers',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './all-suppliers.component.html',
  styleUrl: './all-suppliers.component.css'
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
  )
  ];
  filteredSuppliers: Supplier[] = [];

  // Filter parameters
  popularity: string = 'Most Popular';
  budget: string = 'Any Budget';
  serviceType: string = 'All Services';
  searchQuery: string = '';

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.supplierService.getAllSuppliers().subscribe(
      (data: Supplier[]) => {
        this.suppliers = data;
        this.filteredSuppliers = data;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  applyFilters(): void {
    this.filteredSuppliers = this.suppliers.filter(supplier => {
      let matchesPopularity = true;
      let matchesBudget = true;
      let matchesServiceType = true;
      let matchesSearch = true;

      // Filter by Popularity (Assuming popularity is based on some rating)
      if (this.popularity === 'Most Popular') {
        this.filteredSuppliers.sort((a, b) => (b.supplierId || 0) - (a.supplierId || 0)); // Placeholder for sorting by popularity
      } else if (this.popularity === 'Least Popular') {
        this.filteredSuppliers.sort((a, b) => (a.supplierId || 0) - (b.supplierId || 0));
      }

      // Filter by Budget (Assuming supplier has a 'budget' field)
      if (this.budget !== 'Any Budget') {
       // matchesBudget = supplier.budget === this.budget;
      }

      // Filter by Service Type
      if (this.serviceType !== 'All Services') {
        matchesServiceType = supplier.userType === this.serviceType;
      }

      // Filter by Search Query
      if (this.searchQuery.trim()) {
        matchesSearch = supplier.businessName.toLowerCase().includes(this.searchQuery.toLowerCase());
      }

      return matchesBudget && matchesServiceType && matchesSearch;
    });
  }
}
