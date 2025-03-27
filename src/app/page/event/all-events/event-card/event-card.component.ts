import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { EventSupplierCardComponent } from '../event-supplier-card/event-supplier-card.component';
import { HttpClient } from '@angular/common/http';
import { EventCardService } from '../../../../../service/EventCardService';
@Component({
  selector: 'app-event-card',
  imports: [NgFor, EventSupplierCardComponent,CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnInit {
  @Input() public eventDetails: any;
  isFirstVar: Boolean = true;


  ngOnInit(): void {
    console.log(this.eventDetails);
  }

  public isFirst(): Boolean {
    if (this.isFirstVar) {
      this.isFirstVar = false;
      return true;
    }
    return false;
  }

  eventList:Event[] = []

  constructor(private http: HttpClient, private eventCardService:EventCardService){

  }

  getAllEventCards(){
    this.eventCardService.getAllEvents().subscribe((eventList:Event[])=>{
      this.eventList=eventList;
    })
  }
}
