import { Injectable } from "@angular/core";
import { AgendaTask } from "../../app/model/AgendaTask";

@Injectable({
  providedIn: 'root'
})

export class SampleAgendaService {
  private agendaTasks: AgendaTask[] = [
    {
      title: "Task 1",
      description: "Description for Task 1",
      start_time: "2025-04-10T14:50:00.000Z",
      end_time: "2025-04-10T14:52:00.000Z"
    },
    {
      title: "Task 2",
      description: "Description for Task 2",
      start_time: "2025-04-10T14:52:00.000Z",
      end_time: "2025-04-10T14:54:00.000Z"
    },
    {
      title: "Task 3",
      description: "Description for Task 3",
      start_time: "2025-04-10T14:54:00.000Z",
      end_time: "2025-04-10T14:56:00.000Z"
    },
    {
      title: "Task 4",
      description: "Description for Task 4",
      start_time: "2025-04-10T14:56:00.000Z",
      end_time: "2025-04-10T14:58:00.000Z"
    },
    {
      title: "Task 5",
      description: "Description for Task 5",
      start_time: "2025-04-10T14:58:00.000Z",
      end_time: "2025-04-10T15:00:00.000Z"
    }
  ];

  private fallbackTask: AgendaTask = {
    title: 'Add Tasks to Continue Event Agenda',
    description: 'No tasks available',
    start_time: new Date().toISOString(),
    end_time: new Date().toISOString(),
  };

  getAllTasks(): AgendaTask[] {
    return this.agendaTasks.length ? this.agendaTasks : [this.fallbackTask];
  }

  getFallbackTask(): AgendaTask {
    return this.fallbackTask;
  }

}
