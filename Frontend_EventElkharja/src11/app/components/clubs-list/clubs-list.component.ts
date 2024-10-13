import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/classes/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubs-list',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css']
})
export class ClubsListComponent {
  @ViewChild('AddClubModal') AddClubModal: any; // Modal reference

  constructor(
    private clubService: ClubService,
    private router: Router) { }


  clubs: Club[] = [];

  ngOnInit(): void {
    try {
      this.clubService.getClubs().subscribe(data => {
        this.clubs = data;
      });
    } catch (error) {
      console.error(error);
    }
  }

  


  updateClub(id: number) {
    this.router.navigate(['updateclub', id]);
  }

  deleteClub(id: number) {
    this.clubService.deleteclub(id).subscribe(res => {
      this.clubs = this.clubs.filter(club => club.id !== id);
    });
  }
}
