import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRootComponent } from "./page/user/user-root/user-root.component";
import { LoginComponent } from "./page/user/login/login.component";
import { SignupComponent } from "./page/user/signup/signup.component";
import { LandingComponent } from './page/user/landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserRootComponent, LoginComponent, SignupComponent,LandingComponent,UserRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
