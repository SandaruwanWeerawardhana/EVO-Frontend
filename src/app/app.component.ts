import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VenueDashboardComponent } from "./page/event/venue-dashboard/venue-dashboard.component";
import { EventRootComponent } from "./page/event/event-root/event-root.component";
import { AgendaComponent } from "./page/event/agenda/agenda.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VenueDashboardComponent, EventRootComponent, AgendaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
