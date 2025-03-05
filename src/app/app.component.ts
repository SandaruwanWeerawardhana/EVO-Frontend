import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRootComponent } from "./page/user/user-root/user-root.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
