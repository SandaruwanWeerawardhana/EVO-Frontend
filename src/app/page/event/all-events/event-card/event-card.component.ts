import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EventSupplierCardComponent } from '../event-supplier-card/event-supplier-card.component';
@Component({
  selector: 'app-event-card',
  imports: [NgFor, EventSupplierCardComponent],
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
}
