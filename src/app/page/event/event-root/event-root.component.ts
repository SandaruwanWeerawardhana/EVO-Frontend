import { Component } from '@angular/core';
import { EventSelectionComponent } from '../event-selection/event-selection.component';
import { EventSummaryComponent } from '../event-summary/event-summary.component';

@Component({
  selector: 'app-event-root',
  imports: [EventSelectionComponent,EventSummaryComponent],
  templateUrl: './event-root.component.html',
  styleUrl: './event-root.component.css'
})
export class EventRootComponent {

}
