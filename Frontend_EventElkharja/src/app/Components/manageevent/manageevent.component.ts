import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';
import{Event} from 'src/app/Interfaces/event';
import 'bootstrap/dist/js/bootstrap.min.js';

@Component({
  selector: 'app-manageevent',
  templateUrl: './manageevent.component.html',
  styleUrls: ['./manageevent.component.css']
})
export class ManageeventComponent {
  events: Event[] = [];

 

  editedEvent: Partial<Event> = {};

  constructor( private toastr: ToastrService,private eventService: EventService) {}

  ngOnInit() {
    this.getEvents();
  }

  public getEvents(): void {
    this.eventService.getEvents().subscribe(
      (response : any) => {
        this.events = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
prendrenomFile(filePath: string): string {
    const lastBackslashIndex = filePath.lastIndexOf('\\'); 
      const fileName = filePath.slice(lastBackslashIndex + 1);
    console.log(fileName);

    return `../../../assets/${fileName}`;
}
  Delete(id: number): void {
    
    this.eventService.deleteEvent(id).subscribe(
      () => {
        this.toastr.error('Annonce supprimée avec succès', 'Succès');
         this.getEvents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  DisplayUpdate(event: Event): void {
    this.editedEvent= { ...event };
  }
  UpdateEvent(form: NgForm): void {
    if (this.editedEvent.idEvent !== undefined) { // Make sure to use the correct property name
      this.eventService.updateEvent(this.editedEvent as any).subscribe(
        (response: any) => {
          this.toastr.success('Annonce mise à jour avec succès', 'Succès');
          this.getEvents();
        }
      );
    }
  }

  public SearchEvent(key: string): void {
    const searchQuery = key ? key.toLowerCase() : '';
    this.events = this.events.filter((item: Event) => item.categorie.toLowerCase().indexOf(searchQuery) > -1);
    if(!key){
      this.getEvents();
    }
  }

}