import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceSelectionComponent } from './page/event/service-selection/service-selection.component';
import { PhotographerInfoComponent } from './page/event/photographer-info/photographer-info.component';
import { SupplierRootComponent } from "./page/supplier/supplier-root/supplier-root.component";
import { EntertainmentInfoComponent } from './page/event/entertainment-info/entertainment-info.component';
import { EventSummaryComponent } from './page/event/event-summary/event-summary.component';
import { EventSelectionComponent } from './page/event/event-selection/event-selection.component';
import { BeautyEssentialsInfoComponent } from './page/event/beauty-essentials-info/beauty-essentials-info.component';
import { VenueDashboardComponent } from "./page/event/venue-dashboard/venue-dashboard.component";
import { EventRootComponent } from "./page/event/event-root/event-root.component";
import { AgendaComponent } from "./page/event/agenda/agenda.component";
import { DetailedPreviousWorkComponent } from "./page/supplier/detailed-previous-work/detailed-previous-work.component";
import { UserRootComponent } from "./page/user/user-root/user-root.component";
import { LoginComponent } from "./page/user/login/login.component";
import { SignupComponent } from "./page/user/signup/signup.component";
import { LandingComponent } from './page/user/landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserRootComponent, LoginComponent, SignupComponent,LandingComponent, VenueDashboardComponent,DetailedPreviousWorkComponent, EventRootComponent, AgendaComponent, EventSummaryComponent, EventSelectionComponent, BeautyEssentialsInfoComponent, ServiceSelectionComponent, PhotographerInfoComponent, SupplierRootComponent, EntertainmentInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EVO-Frontend-app';
}
