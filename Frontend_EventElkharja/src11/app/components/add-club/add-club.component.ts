import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/classes/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent {


@ViewChild('AddClubModal') AddClubModal: any; // Modal reference

constructor(
  private clubService: ClubService,
  private toastr: ToastrService,
  private router: Router) { }

newClub = new FormGroup({
  title: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  image: new FormControl('', Validators.required),
  location: new FormControl('', Validators.required),
  category: new FormControl('', Validators.required),
  creator: new FormControl('', Validators.required),
  members: new FormControl('')
});


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

  console.log(postData);
  this.clubService.postclub(postData).subscribe(res => {
    console.log(res);
    this.newClub.reset({});
    this.toastr.success('Action created successfully!', 'Success');


  });
  this.router.navigate(['/clubslist']);
  
}

}

