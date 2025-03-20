import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-supplier-card',
  imports: [NgIf,NgFor],
  templateUrl: './event-supplier-card.component.html',
  styleUrl: './event-supplier-card.component.css'
})
export class EventSupplierCardComponent {
  suppliers =[ {
    supplierName:"kaveesha",
    profilePictureUrl:"https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
    businessDescription:"lorem",
    businessName:"Alfa"
  }, {
    supplierName:"kaveesha",
    profilePictureUrl:"https://cdn.pixabay.com/photo/2025/03/07/13/12/flower-9453063_1280.jpg",
    businessDescription:"lorem",
    businessName:"Alfa"
  } ]
  


}
