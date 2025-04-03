import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, NavBarComponent,RouterLink,FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {}

export class MyComponent {
  imagePath = 'assets/homepage.jpg';
}

