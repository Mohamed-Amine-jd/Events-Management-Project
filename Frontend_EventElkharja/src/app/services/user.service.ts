import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl =  'http://localhost:5050';

  constructor(private http: HttpClient){}

  
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiServerUrl}/login`, body);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }
/*
  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/users/update`, user);
  }
*/
  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  }

  getUserByEmail(email: string): Observable<User> {
    // Assurez-vous que votre API prend en charge cette requête
    const url = `${this.apiServerUrl}/user/find/${email}`;
    return this.http.get<User>(url);
  }
}
