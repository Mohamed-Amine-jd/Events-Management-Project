import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {


  constructor(public router: Router) {}
  email = localStorage.getItem('email');

  ngOnInit(): void {
    console.log(this.email);
    
  }
    
  logOut() {
    localStorage.removeItem('email');
    this.email=null;
    this.router.navigate(['/home']);
  
  
  }
}
