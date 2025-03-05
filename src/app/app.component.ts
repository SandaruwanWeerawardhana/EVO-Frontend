import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupplierRootComponent } from './page/supplier/supplier-root/supplier-root.component';

@Component({
  selector: 'app-root',
  imports: [SupplierRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
