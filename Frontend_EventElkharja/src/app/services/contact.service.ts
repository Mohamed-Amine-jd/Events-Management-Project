import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Interfaces/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiServerUrl =  'http://localhost:5050';

  constructor(private http: HttpClient){}

  
 

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiServerUrl}/contacte/all`);
  }

  public addContact(contact: Contact): Observable<Contact> {
    console.log(contact)
    return this.http.post<Contact>(`${this.apiServerUrl}/contacte/add`, contact);
  }


  public deletecontact(contactId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/contacte/delete/${contactId}`);
  }
}
