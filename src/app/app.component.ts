import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VenuePagePopupComponent } from "./page/event/venue-page-popup/venue-page-popup.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
