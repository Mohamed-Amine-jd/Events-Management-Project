import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private toastr: ToastrService,private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      md: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
 login(form: NgForm): void {
    if (form.valid) {
      const email=form.value.email;
      const password=form.value.password;
      localStorage.setItem( "email", email);
      
     
 

      this.userService.login(email,password).subscribe(
        (response: any) => {
          console.log('Server Response:', response);
          const role = response.role;
          localStorage.setItem( "role", role);
         ;
         this.toastr.success('Connecter','succès');
          if (role === 'user') {
           
            this.router.navigate(['/home']);
          } else if (role === 'admin') {
            this.router.navigate(['/crud']);
          } 
        },
        error => {
          this.toastr.error('Veuillez vérifier vos données','Erreur');
          
        }
      );
    }
  }

}

