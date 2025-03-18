import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../../../common/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../../supplier/common/side-bar/side-bar.component';
import { AdminNavComponent } from '../common/admin-nav/admin-nav.component';
import { AdminSideNavComponent } from "../common/admin-side-nav/admin-side-nav.component";

@Component({
  selector: 'app-admin-root',
  imports: [AdminNavComponent, RouterOutlet, NavBarComponent, AdminSideNavComponent],
  templateUrl: './admin-root.component.html',
  styleUrl: './admin-root.component.css'
})
export class AdminRootComponent {

}
