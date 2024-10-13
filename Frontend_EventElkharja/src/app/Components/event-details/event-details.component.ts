import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import{Event} from 'src/app/Interfaces/event';
import { NgForm } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/Interfaces/reservation';
import { AvisService } from 'src/app/services/avis.service';
import { Avis } from 'src/app/Interfaces/avis';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
   event: Event = {} as Event; 
   reservation: Reservation = {} as Reservation;
   avis: Avis = {} as Avis; // Déclarez un objet de type Event

  numberOfTickets: number = 0; 
  constructor(
    private modalService: NgbModal,
    private avisService: AvisService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private eventService: EventService,
    private userService: UserService,
    private reseravationService:ReservationService,
     public router: Router
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      const eventId = +params['id'];
      this.eventService.getEventById(eventId).subscribe((event: any) => {
       // Assurez-vous d'appeler le service correct
        this.event = event;
      });
    });
    
  }
  addAvis() {
    // Open the modal with id 'addReviewModal'
    this.modalService.open( { centered: true });
  }
  addReview(reviewForm: NgForm): void {
    if (reviewForm.valid) {
      this.avis.idevent = this.event.idEvent;
      this.avis.emailClient = reviewForm.value.emailClient; 
      this.avis.message = reviewForm.value.message;
  
      this.avisService.addAvis(this.avis).subscribe(
        (response: any) => {
          console.log('Response from server:', response);
          this.toastr.success('review adding ', 'Succès');
          this.modalService.dismissAll(); // Close the modal after successful submission
          reviewForm.resetForm(); // Reset the form
        },
        (error) => {
          console.error('Error adding review:', error);
          this.toastr.error('Une erreur s\'est produite lors de l\'ajout de l\'avis', 'Erreur');
        }
      );
    }
  }


  ShowAvis(id: number) {
    this.router.navigate(['/aviss', id]);
  }
  
  
  addReservation(): void { 
    if (this.numberOfTickets > 0 && this.event.capacity-this.numberOfTickets>=0) {
      this.reservation.dateReser = new Date();
      const emailClient = localStorage.getItem('email')!;
      this.reservation.emailClient = emailClient;
      this.reservation.nbrPerson = this.numberOfTickets;
      this.reservation.titlereserv = this.event.title;
      this.reservation.idevent=this.event.idEvent;
      this.reservation.price = this.event.price * this.numberOfTickets;
      console.log(this.reservation);
      localStorage.setItem("reservation",JSON.stringify(this.reservation));
      // Ajoutez une réservation
      this.reseravationService.reduceQuantity(this.reservation).subscribe(
        (response: any) => {
           
          console.log(response)
          if (typeof response === 'string') {
            window.location.href = response;
          } else {
            console.log('Response is a Produit object:', response);
          }

         this.eventService.getEventById(this.event.idEvent).subscribe((event: any) => {
            if (event) {
              console.log(event)
              event.capacity=  (this.event.capacity)-(this.reservation.nbrPerson); // Mettez à jour la capacité de l'événement
              this.eventService.updateEvent(event).subscribe(updatedEvent => {
                console.log('Event updated:', updatedEvent);
                this.toastr.success('Reservation added successfully', 'Success');
              }, error => {
                console.error('Error updating event:', error);
              });
            }
          });
        },
        error => {
          console.error('Error adding reservation:', error);
        }
      );
    } else {
      this.toastr.error('Reservation failed: .', 'Error');
    }
  }
  
  prendrenomFile(filePath: string): string {
    if (filePath && filePath.trim() !== '') {
      const lastSlashIndex = Math.max(filePath.lastIndexOf('\\'), filePath.lastIndexOf('/'));
      if (lastSlashIndex === -1) {
        return filePath;
      }   
      const fileName = filePath.slice(lastSlashIndex + 1);
      return `../../../assets/${fileName}`;
    } else {
      // Gérer le cas où filePath est vide ou non défini
      return ''; // ou tout autre gestion appropriée
    }
  }
  
}
