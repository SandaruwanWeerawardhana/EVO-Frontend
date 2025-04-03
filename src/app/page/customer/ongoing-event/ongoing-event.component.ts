import { Component, OnInit, OnDestroy } from '@angular/core';



interface TimelineEvent {
  time: string;    // Format: "HH:MM" (24-hour)
  title: string;
  description: string;
  completed: boolean;
}

interface SpaceEvent {
  time: number;
  earthTime: string;
  spaceEvent: string;
}

@Component({
  selector: 'app-ongoing-event',
  templateUrl: './ongoing-event.component.html',
  styleUrls: ['./ongoing-event.component.css']
})


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class OngoingEventComponent implements OnInit,OnDestroy {
 

  currentTime: string = '';
  currentMinute: number = 0;
  private timeUpdateInterval: any;
  private minuteUpdateInterval: any;

  ngOnInit(): void {
    this.updateSriLankaTime();
    this.timeUpdateInterval = setInterval(() => this.updateSriLankaTime(), 1000);
    
    this.minuteUpdateInterval = setInterval(() => {
      this.currentMinute = (this.currentMinute + 1) % 61;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeUpdateInterval);
    clearInterval(this.minuteUpdateInterval);
  }

  private updateSriLankaTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Colombo',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  isPastEvent(eventTime: number): boolean {
    return eventTime <= this.currentMinute;
  }
}

  
