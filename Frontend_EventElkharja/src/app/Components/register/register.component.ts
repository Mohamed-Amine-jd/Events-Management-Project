import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public users: User[] = [];
  public addForm!: FormGroup;
  constructor(private toastr: ToastrService,private fb: FormBuilder, private auth: UserService, private router: Router) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]],
      email: ['', [Validators.required]],
       password: ['', [Validators.required]]
    });
  }

  public ajouterutilisateur(): void {
    if (this.addForm.valid) {
      this.addForm.value.role='user'; 
      const user: User = this.addForm.value;
      console.log(user);
      this.auth.addUser(user).subscribe(
        (response: User) => {
         this.toastr.success('Inscription réussie','succès');
            this.getUsers();
          this.addForm.reset();
          this.router.navigate(['/login']);
        }
      );
    }
  }

  public getUsers(): void {
    this.auth.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
