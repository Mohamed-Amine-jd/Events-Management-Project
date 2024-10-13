import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent {
  constructor(public router: Router) { }

  logOut() {
    localStorage.removeItem('email')
    this.router.navigate(['/home']);
  }}
