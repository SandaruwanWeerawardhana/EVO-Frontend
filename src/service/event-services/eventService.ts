import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../app/environment/env.test";

export class eventService{
    
    constructor(private http:HttpClient){
    }

    getAllEvents():Observable<Event[]>{
        return this.http.get<Event[]>(`${environment.baseUrl}/event/get-all`);

    }
}