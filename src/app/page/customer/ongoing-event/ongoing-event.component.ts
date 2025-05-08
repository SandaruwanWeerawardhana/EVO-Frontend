import { Component, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AgendaTask } from '../../../model/AgendaTask';
import { SampleAgendaService } from '../../../../service/event-services/SampleAgendaService';
import { TimelineComponent } from './timeline/timeline.component';
import { OngoingEventCardComponent } from './ongoing-event-card/ongoing-event-card.component';

@Component({
  selector: 'app-ongoing-event',
  imports: [TimelineComponent, OngoingEventCardComponent, FormsModule, CommonModule],
  templateUrl: './ongoing-event.component.html',
  styleUrls: ['./ongoing-event.component.css'],
})

export class OngoingEventComponent implements OnInit, OnDestroy {
  agendaTask: AgendaTask[] = [];
  fallbackTask!: AgendaTask;

  currentTask$ = new BehaviorSubject<AgendaTask | null>(null);
  private updateSubscription!: Subscription;

  constructor(private agendaService: SampleAgendaService) {}

  ngOnInit() {

    this.agendaTask = this.agendaService.getAllTasks();
    this.fallbackTask = this.agendaService.getFallbackTask();

    this.updateTaskInfo();
    this.updateSubscription = interval(12000).subscribe(() => this.updateTaskInfo()); // Update card every 12 seconds
  }

  private updateTaskInfo() {
    const now = new Date();
    const ongoing = this.findCurrentTask(now);

    if (ongoing) {
      this.currentTask$.next(ongoing);
    } else {
      this.currentTask$.next(this.fallbackTask);
    }
  }

  private findCurrentTask(now: Date): AgendaTask | undefined {
    return this.agendaTask.find(task => {
      const start = new Date(task.start_time);
      const end = new Date(task.end_time);
      return now >= start && now <= end;
    });
  }

  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}


