import {  NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [RouterLink,NgIf,NgStyle],
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnInit {


  public eventSummery:any = null;
  event:any = {
    eventType : "wedding",
    startDate :"2023/02/02",
    endDate :"2026/03/07",
    eventStatus:"Pending"
  };
  supplers:any[] = [{
    name:"Rocky"
  }];



  ngOnInit(): void {
      this.refeshData();
  }

  refeshData(){

  }
}
