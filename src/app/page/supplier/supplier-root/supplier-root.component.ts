import { Component } from '@angular/core';
import { ProfileViewComponent } from "../profile-view/profile-view.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-supplier-root',
  imports: [ProfileViewComponent],
  templateUrl: './supplier-root.component.html',
  styleUrl: './supplier-root.component.css'
})
export class SupplierRootComponent {

}
