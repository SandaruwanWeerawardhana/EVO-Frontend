import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceSelectionComponent } from './page/event/service-selection/service-selection.component';
import { PhotographerInfoComponent } from './page/event/photographer-info/photographer-info.component';
import { SupplierRootComponent } from "./page/supplier/supplier-root/supplier-root.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServiceSelectionComponent, PhotographerInfoComponent, SupplierRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
