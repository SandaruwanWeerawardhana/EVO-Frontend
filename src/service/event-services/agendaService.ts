import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import User from "../../app/model/User";
import { Session } from "@supabase/supabase-js";
import { AgendaComponent } from "../../app/page/event/agenda/agenda.component";
import { env } from "../../app/environment"

@Injectable({
    providedIn: 'root'
})
export class AgendaService {

    constructor(private http:HttpClient) {
    }
    loadevent(id:number):Observable<Event[]>{
        return this.http.get<Event[]>(`${env.baseUrl}/api/event/search/${id}`);
    }
    savesession(session:Session, agendaId:number):Observable<Session>{
        return this.http.post<Session>(`${env.baseUrl}/api/event/agenda/${agendaId}/add-task`, {session});
    }
    loadsession(agendaId:number, taskId:number):Observable<Session[]>{
        return this.http.get<Session[]>(`${env.baseUrl}/api/event/agenda/${agendaId}/task/${taskId}`);
    }
    deletesession(agendaId:number, taskId:number):Observable<Session>{
        return this.http.delete<Session>(`${env.baseUrl}/api/event/agenda/${agendaId}/task/delete/${taskId}`);
    }
    updateagenda(agenda:AgendaComponent):Observable<AgendaComponent>{
        return this.http.put<AgendaComponent>(`${env.baseUrl}/api/event/agenda/update`, {agenda});
    }
    

    
}

