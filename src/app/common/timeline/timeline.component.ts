import { Component, input } from '@angular/core';
import { NgxTimelineModule, NgxTimelineOrientation} from '@frxjs/ngx-timeline';
import { NgxTimelineEvent } from '@frxjs/ngx-timeline';

@Component({
  selector: 'app-timeline',
  imports: [NgxTimelineModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})

export class TimelineComponent {

  readonly orientation = NgxTimelineOrientation.HORIZONTAL;

  events: NgxTimelineEvent[] = [
    {
      timestamp: new Date('2025-01-01'),
      title: 'Event Title 1',
      description: 'Description for Event 1'
    },
    {
      timestamp: new Date('2025-02-01'),
      title: 'Event Title 2',
      description: 'Description for Event 2'
    },
    {
      timestamp: new Date('2025-01-01'),
      title: 'Event Title 1',
      description: 'Description for Event 1'
    },
    {
      timestamp: new Date('2025-02-01'),
      title: 'Event Title 2',
      description: 'Description for Event 2'
    }
  ];

}
