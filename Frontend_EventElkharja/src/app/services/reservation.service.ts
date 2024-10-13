import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../Interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiServerUrl =  'http://localhost:5050';

  constructor(private http: HttpClient){}
  
    
  public getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiServerUrl}/reservation/all`);
  }
  public reduceQuantity(reservation: Reservation): Observable<Reservation | string> {
   // return this.http.post<Reservation>(`${this.apiServerUrl}/reservation/add`, reservation);
      return this.http.post<Reservation>(`${this.apiServerUrl}/reservation/payment`, reservation, { responseType: 'text' as 'json' });
    }

    public addReservation(reservation: Reservation): Observable<Reservation | string> {
      return this.http.post<Reservation>(`${this.apiServerUrl}/reservation/add`, reservation);
            }
    
 
  
  public deleteReservation(ReservationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/reservation/delete/${ReservationId}`);
  }

  getReserByEmail(email: string): Observable<Reservation> {
    // Assurez-vous que votre API prend en charge cette requête
    const url = `${this.apiServerUrl}/reservation/find/${email}`;
    return this.http.get<Reservation>(url);
  }

  public getReservationById(reservationId: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiServerUrl}/reservation/findd/${reservationId}`);
  }

  
  
  
  }
  