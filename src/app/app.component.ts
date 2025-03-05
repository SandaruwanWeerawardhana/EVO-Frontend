import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupplierRootComponent } from "./page/supplier/supplier-root/supplier-root.component";
import { DetailedPreviousWorkComponent } from "./page/supplier/detailed-previous-work/detailed-previous-work.component";

@Component({
  selector: 'app-root',
  imports: [SupplierRootComponent, DetailedPreviousWorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
