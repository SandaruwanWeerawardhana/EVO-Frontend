import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavComponent } from '../common/admin-nav/admin-nav.component';
import { AdminSideNavComponent } from "../common/admin-side-nav/admin-side-nav.component";

@Component({
  selector: 'app-admin-root',
  imports: [AdminNavComponent, RouterOutlet, AdminSideNavComponent],
  templateUrl: './admin-root.component.html',
  styleUrl: './admin-root.component.css'
})
export class AdminRootComponent {

}
