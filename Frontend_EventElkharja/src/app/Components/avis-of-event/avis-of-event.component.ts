import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Avis } from 'src/app/Interfaces/avis';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-avis-of-event',
  templateUrl: './avis-of-event.component.html',
  styleUrls: ['./avis-of-event.component.css']
})
export class AvisOfEventComponent {
  avis: Avis[] = []; 

  constructor(
   
    private avisService: AvisService,
    private toastr: ToastrService,
     public router: Router,
     private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.avisService.getAvisByIdEvent(id).subscribe((avis: any) => { // Assurez-vous d'appeler le service correct
        this.avis = avis;
        console.log(this.avis)
      });
    });

    
}

returnToEvent(id:number){
  this.router.navigate(['/event', id]);
}

}
