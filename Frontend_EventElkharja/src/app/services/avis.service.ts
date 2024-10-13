import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avis } from '../Interfaces/avis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private apiServerUrl =  'http://localhost:5050';

  constructor(private http: HttpClient){}
  
    
  public getAvis(): Observable<Avis[]> {
    return this.http.get<Avis[]>(`${this.apiServerUrl}/avis/all`);
  }


    public addAvis(avis: Avis): Observable<Avis | string> {
      return this.http.post<Avis>(`${this.apiServerUrl}/avis/add`, avis);
            }
    
 
  
  public deleteAvis(avisId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/avis/delete/${avisId}`);
  }



  public getAvisByIdEvent(EventId: number): Observable<Avis> {
    return this.http.get<Avis>(`${this.apiServerUrl}/avis/find/${EventId}`);
  }
}
