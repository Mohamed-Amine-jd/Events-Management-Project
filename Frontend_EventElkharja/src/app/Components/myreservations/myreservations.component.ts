import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from 'src/app/Interfaces/reservation';
import { EventService } from 'src/app/services/event.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css']
})
export class MyreservationsComponent {
  Reservations: Reservation[] = [];
 
 

  editedProduct: Partial<Reservation> = {};

  constructor( private eventService: EventService, private toastr: ToastrService,private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getReservations();
     console.log(localStorage.getItem('email')!);
  }

  getReservations(): void {
    this.reservationService.getReserByEmail(localStorage.getItem('email')!).subscribe(
      (response: any) => {
        // Change to Reservation[]
            this.Reservations = response; // Assign the entire array directly
            console.log(this.Reservations);
        },
        (error: HttpErrorResponse) => {
            console.error(error);
        }
    );
}

Delete(id: number): void {
  const currentReservation = this.Reservations.find(reservation => reservation.idReservation === id);
  const eventId = currentReservation?.idevent;

  if (!eventId) {
    console.error("Event ID not found for the current reservation");
    return;
  }

  this.eventService.getEventById(eventId).subscribe((event: any) => {
    if (event) {
      console.log(event);
      this.reservationService.getReservationById(id).subscribe((reservation: any) => {
        const date = new Date(reservation.dateReser); // Convert reservation date to a Date object
        const eventStartDate = new Date(event.startdate); // Convert event start date to a Date object
 console.log(date)
 console.log(eventStartDate)
        // Complete condition: if event.startdate is valid and if date is greater than or equal to 2 days from event.startdate
        if (!isNaN(eventStartDate.getTime()) && date.getTime() >= eventStartDate.getTime() + (2 * 24 * 60 * 60 * 1000)) {
          // Update event capacity or perform other actions
        }
      });
    }
  });

  // Make sure to handle the completion of the above asynchronous operations
  this.reservationService.deleteReservation(id).subscribe(
    () => {
      this.toastr.error('Annonce supprimée avec succès', 'Succès');
      this.getReservations();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

}

