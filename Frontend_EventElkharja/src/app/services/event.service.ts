import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiServerUrl =  'http://localhost:5050';

constructor(private http: HttpClient){}

  
public getEvents(): Observable<Event[]> {
  return this.http.get<Event[]>(`${this.apiServerUrl}/event/all`);
}
public addEvent(event: Event): Observable<Event | string> {
    console.log(event);
    return this.http.post<Event>(`${this.apiServerUrl}/event/add`, event);
  }


public updateEvent(event: Event): Observable<Event> {
  return this.http.put<Event>(`${this.apiServerUrl}/event/update`, event);
}

public deleteEvent(EventId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/event/delete/${EventId}`);
}
public getEventById(EventId: number): Observable<Event> {
  return this.http.get<Event>(`${this.apiServerUrl}/event/find/${EventId}`);
}



}
