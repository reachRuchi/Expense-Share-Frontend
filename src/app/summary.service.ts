import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }
  
    
    //get all friends
    getFriendsList():Observable<any>{
      return this.http.get(`${this.baseUrl}/friends`);
    }
  
    //get summary by user name
    getSummaryByName(name: String): Observable<any>{
      return this.http.get(`${this.baseUrl}/summary/${name}`);
    }

    //create summary
    createSummary(summary:Object): Observable<any>{
      return this.http.post(`${this.baseUrl}/createSummary`,summary);
    }

    //create event
    createEvent(event:Object): Observable<any>{
      return this.http.post(`${this.baseUrl}/createEvent`,event);
    }

    //settleup api
    settleUp(summary:Object): Observable<any>{
      return this.http.put(`${this.baseUrl}/settleUp`,summary);
    }

    //get summary by event id
    getSummaryByEventId(id: number): Observable<any>{
      return this.http.get(`${this.baseUrl}/eventSummary/${id}`);
    }
}
