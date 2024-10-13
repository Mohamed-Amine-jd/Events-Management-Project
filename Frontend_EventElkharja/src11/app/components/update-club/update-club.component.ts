import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/classes/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent {
  @ViewChild('editClubModal') editClubModal: any; // Modal reference
  constructor(
    private clubService: ClubService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }



    ngOnInit(): void {
      this.clubService.getclubById(this.route.snapshot.params['id']).subscribe(data => {
        this.newClub.patchValue({
          title: data.title || '', 
          description: data.description || '',
          image: data.image || '',
          location: data.location || '',
          category: data.category || '',
          creator: data.creator || '',
          members: data.members ? data.members.join(', ') : ''
        });
      });
    }
    
    

  newClub = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    creator: new FormControl('', Validators.required),
    members: new FormControl('')
  });

  onSubmit() {
    const postData: Club = {
      title: this.newClub.value.title!,
      description: this.newClub.value.description!,
      image: this.newClub.value.image!,
      location: this.newClub.value.location!,
      category: this.newClub.value.category!,
      creator: this.newClub.value.creator!,
      members: this.newClub.value.members?.split(',').map(member => member.trim()) // Split members string into array of strings
    };

    this.clubService.updateclub(this.route.snapshot.params['id'], postData).subscribe(data => {
      this.toastr.success('Club updated successfully');
    }
    );
    this.editClubModal.nativeElement.modal('hide');

    this.router.navigate(['/']);
  }
}
