import { Component } from '@angular/core';
import { AddPreviousComponent } from "../add-previous/add-previous.component";
import { PhotographerPackagesComponent } from "../photographer-packages/photographer-packages.component";

@Component({
  selector: 'app-supplier-root',
  imports: [AddPreviousComponent, PhotographerPackagesComponent],
  templateUrl: './supplier-root.component.html',
  styleUrl: './supplier-root.component.css'
})
export class SupplierRootComponent {

}
