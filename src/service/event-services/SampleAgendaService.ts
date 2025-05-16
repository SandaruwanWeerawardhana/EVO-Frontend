import { Injectable } from "@angular/core";
import { AgendaTask } from "../../app/model/AgendaTask";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../app/environment/env.test";

export interface AgendaData {
  id: number;
  date: string;
  time: string;
  tasks: Task[];
}

export interface Task {
  taskId: number;
  taskName: string;
  startTime: string;
  endTime: string;
  supplierId: number;
  supplierType: string;
}

@Injectable({
  providedIn: 'root'
})

export class SampleAgendaService {

  constructor(private http: HttpClient) { }

    // default fallback task to be displayed when no tasks are available - Lahiru20
  private agendaTasks: AgendaTask[] = [
    {
      title: 'Add Tasks to Continue Event Agenda',
      description: 'No tasks available',
      start_time: "2025-04-10T14:50:00.000Z",
      end_time: "2025-04-10T14:52:00.000Z"
    },

    // Sample tasks for demonstration purposes with random gaps for 5 times - Lahiru20
    ...Array.from({ length: 5 }, (_, i) => {
      const start = new Date();
      start.setMinutes(start.getMinutes() + i * (Math.floor(Math.random() * 5) + 1));
      const end = new Date(start);
      end.setMinutes(start.getMinutes() + (Math.floor(Math.random() * 5) + 1));
      const title = [
        "Wedding Ceremony",
        "Reception Setup",
        "Guest Arrival",
        "Dinner Service",
        "Cake Cutting",
        "First Dance",
        "Photo Session",
        "Bouquet Toss",
        "Speeches",
        "Fireworks Show",
        "After Party"
      ];
      const descriptions = [
        "Ceremony at the venue",
        "Setting up the reception area",
        "Guests arriving at the venue",
        "Dinner service begins",
        "Cutting the wedding cake",
        "First dance of the couple",
        "Photo session with guests",
        "Bouquet toss event",
        "Speeches by family and friends",
        "Fireworks show to celebrate",
        "After party with DJ and dancing"
      ];
      return {
        title: title[i] || 'After Party' + (i),
        description: descriptions[i] || 'After Party Fireworks Event (' + (i) + `)`,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      };
    }),
    ...Array.from({ length: 5 }, (_, i) => {
      const start = new Date();
      start.setMinutes(start.getMinutes() + i * (Math.floor(Math.random() * 5) + 1));
      const end = new Date(start);
      end.setMinutes(start.getMinutes() + (Math.floor(Math.random() * 5) + 1));
      const title = [
        "Wedding Ceremony",
        "Reception Setup",
        "Guest Arrival",
        "Dinner Service",
        "Cake Cutting",
        "First Dance",
        "Photo Session",
        "Bouquet Toss",
        "Speeches",
        "Fireworks Show",
        "After Party"
      ];
      const descriptions = [
        "Ceremony at the venue",
        "Setting up the reception area",
        "Guests arriving at the venue",
        "Dinner service begins",
        "Cutting the wedding cake",
        "First dance of the couple",
        "Photo session with guests",
        "Bouquet toss event",
        "Speeches by family and friends",
        "Fireworks show to celebrate",
        "After party with DJ and dancing"
      ];
      return {
        title: title[i] || 'After Party (' + (i) + ')',
        description: descriptions[i] || 'After Party Fireworks Event (' + (i) + `)`,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
      };
    })

  ];

  // Fallback task to be displayed when no tasks are available - Lahiru20
  private fallbackTask: AgendaTask = {
    title: 'Add Tasks to Continue Event Agenda',
    description: 'No tasks available',
    start_time: "2025-04-10T14:50:00.000Z",
    end_time: "2025-04-10T14:52:00.000Z",
  };

  // get all tasks fitered from API - Lahiru20
  async getAllTasks(): Promise<AgendaTask[]> {
    await this.fetchAndMapTasks(1).subscribe(tasks => {
      this.agendaTasks.push(...tasks);
    });
    console.log(this.agendaTasks);
    return this.agendaTasks.length ? this.agendaTasks : [this.fallbackTask];
  }

  getFallbackTask(): AgendaTask {
    return this.fallbackTask;
  }

  // Fetch tasks from the API - Lahiru20
  getTasks(agendaId: number): Observable<Task[]> {
    const url = `${environment.baseUrl}/event/agenda/${agendaId}`;
    return this.http.get<AgendaData>(url).pipe(
      map(agenda => agenda.tasks)
    );
  }

  // Fetch and map tasks from the API - Lahiru20
  fetchAndMapTasks(agendaId: number): Observable<AgendaTask[]> {
    return this.getTasks(agendaId).pipe(
      map(tasks =>
        tasks.map(task => ({
          title: task.taskName,
          description: `Supplier Type: ${task.supplierType}`,
          start_time: task.startTime,
          end_time: task.endTime
        }))
      )
    );
  }
}
