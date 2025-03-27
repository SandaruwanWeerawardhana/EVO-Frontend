import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import User from "../app/model/User";

@Injectable({
    providedIn: 'root'
})
export class AgendaService {

    constructor(private http:HttpClient) {
    }
    loaduser():Observable<User[]>{
        return this.http.get<User[]>('${env.baseUrl}//userController/userId/{id}');
    }
    
}

