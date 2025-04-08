import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxTimelineModule, NgxTimelineOrientation, NgxTimelineEventGroup, NgxTimelineEvent } from '@frxjs/ngx-timeline';

@Component({
  selector: 'app-timeline',
  imports: [NgxTimelineModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  @ViewChild('timelineContainer') timelineContainer!: ElementRef;

  readonly orientation = NgxTimelineOrientation.HORIZONTAL;
  readonly groupEvent = NgxTimelineEventGroup.DAY_MONTH_YEAR;

  events: NgxTimelineEvent[] = [
    {
      timestamp: new Date('2025-01-01'),
      title: 'Event Title 1',
      description: 'Description for Event 1'
    }
    , {
       timestamp: new Date('2025-02-01'),
       title: 'Event Title 2',
       description: 'Description for Event 2'
     }
    // {
    //   timestamp: new Date('2025-01-01'),
    //   title: 'Event Title 1',
    //   description: 'Description for Event 1'
    // },
    // {
    //   timestamp: new Date('2025-02-01'),
    //   title: 'Event Title 2',
    //   description: 'Description for Event 2'
    // }
  ];

  scrollRight() {
    this.timelineContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  scrollLeft() {
    this.timelineContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
}