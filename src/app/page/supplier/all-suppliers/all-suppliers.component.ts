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

  suppliers: Supplier[] = [];
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
