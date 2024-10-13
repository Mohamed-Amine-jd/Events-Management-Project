import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../classes/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private httpUrl = 'http://localhost:8080/api/v1/clubs';
  constructor(private http: HttpClient) { }

  getClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.httpUrl);
  }

  postclub(club: Club) {
    return this.http.post(this.httpUrl, club);
  }

  deleteclub(id: number) {
    return this.http.delete(`${this.httpUrl}/${id}`);
  }

  getclubById(id: number) {
    return this.http.get<Club>(`${this.httpUrl}/${id}`);
  }

  updateclub(id: number, data: Club) {
    return this.http.put(`${this.httpUrl}/${id}`, data);
  }

}
