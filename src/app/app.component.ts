import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventSummaryComponent } from './page/event/event-summary/event-summary.component';
import { EventSelectionComponent } from './page/event/event-selection/event-selection.component';
import { BeautyEssentialsInfoComponent } from './page/event/beauty-essentials-info/beauty-essentials-info.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EventSummaryComponent,EventSelectionComponent,BeautyEssentialsInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
