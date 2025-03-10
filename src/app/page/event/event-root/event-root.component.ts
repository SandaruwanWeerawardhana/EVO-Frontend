import { Component } from '@angular/core';
import { EventSelectionComponent } from '../event-selection/event-selection.component';
import { EventSummaryComponent } from '../event-summary/event-summary.component';
import { NavBarComponent } from "../../../common/nav-bar/nav-bar.component";
import { AgendaComponent } from "../agenda/agenda.component";
import { BeautyEssentialsInfoComponent } from "../../supplier/beauty-essentials-info/beauty-essentials-info.component";
import { EntertainmentInfoComponent } from "../../supplier/entertainment-info/entertainment-info.component";
import { PhotographerInfoComponent } from "../../supplier/photographer-info/photographer-info.component";
import { ServiceSelectionComponent } from "../service-selection/service-selection.component";
import { VenueDashboardComponent } from "../venue-dashboard/venue-dashboard.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-event-root',
  imports: [NavBarComponent, RouterOutlet, EventSummaryComponent],
  templateUrl: './event-root.component.html',
  styleUrl: './event-root.component.css'
})
export class EventRootComponent {

}
