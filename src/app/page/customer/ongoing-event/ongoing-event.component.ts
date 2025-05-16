import { Component, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AgendaTask } from '../../../model/AgendaTask';
import { TimelineComponent } from './timeline/timeline.component';
import { OngoingEventCardComponent } from './ongoing-event-card/ongoing-event-card.component';
import { SampleAgendaService } from '../../../../service/event-services/SampleAgendaService';

@Component({
  selector: 'app-ongoing-event',
  imports: [TimelineComponent, OngoingEventCardComponent, FormsModule, CommonModule],
  templateUrl: './ongoing-event.component.html',
  styleUrls: ['./ongoing-event.component.css'],
})
export class OngoingEventComponent implements OnInit, OnDestroy {
  agendaTask: AgendaTask[] = [];
  fallbackTask!: AgendaTask;

  currentTasks$ = new BehaviorSubject<AgendaTask[]>([]);
  private updateSubscription!: Subscription;

  constructor(private agendaService: SampleAgendaService) {}

  async ngOnInit() {
    this.agendaTask = await this.agendaService.getAllTasks();
    this.fallbackTask = this.agendaService.getFallbackTask();
    this.updateTaskInfo();
    this.updateSubscription = interval(12000).subscribe(() => this.updateTaskInfo()); // Update tasks every 12 seconds
  }

  private updateTaskInfo() {
    const now = new Date();
    const ongoingTasks = this.findCurrentTasks(now);

    if (ongoingTasks.length > 0) {
      this.currentTasks$.next(ongoingTasks);
    } else {
      this.currentTasks$.next([this.fallbackTask]);
    }
  }

  private findCurrentTasks(now: Date): AgendaTask[] {
    return this.agendaTask.filter(task => {
      const start = new Date(task.start_time);
      const end = new Date(task.end_time);
      return now >= start && now <= end;
    });
  }

  getGroupedTaskDescription(tasks: AgendaTask[]): string {
    if (tasks.length === 1) {
      return tasks[0].description;
    } else if (tasks.length > 1) {
      return `${tasks.length} Tasks in Parallel - ` + tasks.map(task => task.title).join(' | ');
    }
    return '';
  }

  getTimelineTitle(tasks: AgendaTask[]): string {
    return tasks.length === 1 ? tasks[0].title : 'Tasks in Parallel (' + tasks.length + ')';
  }

  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}


