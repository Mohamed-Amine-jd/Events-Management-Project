import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.css']
})
export class SuccesComponent {
 
  constructor( private reseravationService:ReservationService,private http:HttpClient, private eventService:EventService , public router: Router){}
  ngOnInit(): void {
    this.addReservation();
    
  }
  addReservation() {
    const reservation = JSON.parse(localStorage.getItem('reservation')!);
    console.log(reservation);
    this.reseravationService.addReservation(reservation).subscribe(
      (response: any) => {
        console.log(response);
        if (typeof response === 'string') {
          window.location.href = response;
        } else {
          console.log('Response is a Produit object:', response);
        }

        this.eventService.getEventById(reservation.idevent).subscribe(
          (event: any) => {
            if (event) {
              console.log(event);
              event.capacity -= reservation.nbrPerson; // Update the event's capacity
              this.eventService.updateEvent(event).subscribe(
                (updatedEvent) => {
                  console.log('Event updated:', updatedEvent);
                  localStorage.removeItem('reservation');
                },
                (error) => {
                  console.error('Error updating event:', error);
                }
              );
            }
          }
        );
      }
    );
  }

  home() {
    this.router.navigate(['/home']);
  }
  }
  
  

