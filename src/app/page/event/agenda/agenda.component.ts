import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendaService } from '../../../../service/event-services/agendaService';

interface Session {
  id?: any;
  title: string;
  type: string;
  venue?: string;
  date?: string;
  organizer?: string;
  startTime: string;
  endTime: string;
}

interface EventDetails {
  type: string;
  venue: string;
  date: string;
  organizer: string;
}

@Component({
  selector: 'app-agenda',
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent {

   showPopup:boolean=false;
    closePopup(){
      this.showPopup=false;
    }

public agendaList:any=[
  {
    id: 0,
    time:'',
    date: '',
    tasks: '',
  }
]

  agenda: EventDetails[] = [{ type: '', venue: '', date: '', organizer: '' }];
  sessions: Session[] = [];
  newSession: Session = { title: '', type: '', startTime: '', endTime: '' };
  editingIndex: number = -1;
  showSessionForm: boolean = false;
  showEventDetails: boolean = true;

  constructor(private agendService:AgendaService) { }

  ngOnInit(): void {
    
    this.agenda[0] = {
      type: 'Conference',
      venue: 'Virtual Meeting',
      date: '2025-05-15',
      organizer: 'Your Organization'
    };
  }

  toggleEventDetails(): void {
    this.showEventDetails = !this.showEventDetails;
  }

  openSessionForm(): void {
    this.showSessionForm = true;
    this.newSession = { title: '', type: '', startTime: '', endTime: '' };
    this.editingIndex = -1;
    this.showPopup=false;

    

  }

  cancelSessionForm(): void {
    this.showSessionForm = false;
    this.newSession = { title: '', type: '', startTime: '', endTime: '' };
    this.editingIndex = -1;
  }

  saveSession(): void {
    if (this.editingIndex >= 0) {
      
      this.sessions[this.editingIndex] = {...this.newSession};
    } else {
   
      this.sessions.push({...this.newSession});
    }
    this.showSessionForm = false;
    this.newSession = { title: '', type: '', startTime: '', endTime: '' };
    this.editingIndex = -1;
}



  editSession(index: number): void {
    this.editingIndex = index;
    this.newSession = {...this.sessions[index]};
    this.showSessionForm = true;
  }

  removeSession(index: number): void {
    this.sessions.splice(index, 1);
  }

submitAgenda(): void {
  if (!this.agendaList[0].time || !this.agendaList[0].date || !this.agendaList[0].tasks) {
    alert("Please fill all the fields");
    return;
  }


  if (this.newSession.title || this.newSession.type || this.newSession.startTime || this.newSession.endTime) {
    this.agendaList.push({
      time: this.newSession.startTime,
      date: this.agenda[0].date,
      tasks: this.newSession.title,
      sessionType: this.newSession.type,
      sessionEndTime: this.newSession.endTime
    });
  }

  const agendaWithSessions = {
    ...this.agendaList[0],
    sessions: this.sessions.map((session) => ({
      id: session.id,
      title: session.title,
      type: session.type,
      venue: session.venue,
      date: session.date,
      organizer: session.organizer,
      startTime: session.startTime,
      endTime: session.endTime
    }))
  };

  this.agendService.addagenda(agendaWithSessions).subscribe((response) => {
    console.log("Agenda added successfully", response);
    this.agendaList.push(response);
  });
}




onMouseEnter() {
  this.showPopup = true;
}

onMouseLeave() {
  this.showPopup=false;
}

}

