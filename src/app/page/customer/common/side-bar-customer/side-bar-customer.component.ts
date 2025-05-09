import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar-customer',
  imports: [RouterLink,NgClass,CommonModule],
  templateUrl: './side-bar-customer.component.html',
  styleUrl: './side-bar-customer.component.css'
})
export class SideBarCustomerComponent {
  isSelect: number = 0;
  isSidebarClosed: boolean = false;

  isActive(num: number) {
    this.isSelect = num;
  }
    toggleSidebar() {

      this.isSidebarClosed = !this.isSidebarClosed;
    }
  }
  

