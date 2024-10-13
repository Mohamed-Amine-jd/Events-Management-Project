import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/Interfaces/event';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public events: Event[] = [];
  searchTerm: any;
  filteredEvents: Event[] | undefined;
  userEmail: any;



 

  constructor(private eventService: EventService, public router: Router) {}

  ngOnInit() {
    this.getEvents();
    console.log(this.userEmail)
   this.userEmail=localStorage.getItem('email');
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
    

    return `../../../assets/${fileName}`;
}

reserver(event: Event) {
  this.router.navigate(['/event', event.idEvent]);
}


 



  showAllProducts(): void {
    this.getEvents();

  }searchCategory(category: string): void {

    this.eventService.getEvents().subscribe(
      (response: any) => {
        this.events = response;

        if (category) {
          this.events = this.events.filter((item: Event) => item.categorie.toLowerCase().indexOf(category.toLowerCase()) > -1);
        }
  
        if (this.searchTerm) {
          const searchTermLowerCase = this.searchTerm.toLowerCase();
          this.events = this.events.filter((item: Event) => item.title.toLowerCase().indexOf(searchTermLowerCase) > -1);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
      public SearchEvents(key: string): void {
        const searchQuery = key ? key.toLowerCase() : '';
        this.events = this.events.filter((item: Event) => item.title.toLowerCase().indexOf(searchQuery) > -1);
        if(!key){
          this.getEvents();
        }
      }

    
}
