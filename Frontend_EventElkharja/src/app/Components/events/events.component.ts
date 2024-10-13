import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public events: Event[] = [];
constructor(private toastr: ToastrService,private fb : FormBuilder  ,private eventService:EventService , private router : Router) {}

ngOnInit() {
  this.getEvents();
}

public getEvents(): void {
  this.eventService.getEvents().subscribe(
    (response: Event[]) => {
      this.events = response;
         },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}



public addEvent(donnee: NgForm): void {
  if (donnee.valid) {
    const event: Event = donnee.value;
    this.eventService.addEvent(event).subscribe(
      (response:  any) => {
        console.log('Response from server:', response); // Log the response for debugging purposes

        if (typeof response === 'string') {
          window.location.href = response;
        } else {
          console.log('Response is a Event object:', response);
        }

        this.toastr.success('Event add succès', 'Succès');
        this.router.navigate(['/crud']);
      },
      (error) => {
        console.error('Error adding event:', error); // Log any errors that occur during the HTTP request
        // Handle error (e.g., show error message to user)
      }
    );
  }
}
}