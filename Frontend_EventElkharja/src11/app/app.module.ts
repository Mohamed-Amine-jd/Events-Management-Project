import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAngularesMaterialModule } from './DemoAngularMaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { ClubsListComponent } from './components/clubs-list/clubs-list.component';
import { UpdateClubComponent } from './components/update-club/update-club.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { OutingsComponent } from './components/outings/outings.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavbarComponent,
    ClubsListComponent,
    UpdateClubComponent,
    HomeComponent,
    FooterComponent,
    ClubsComponent,
    AddClubComponent,
    CompetitionsComponent,
    OutingsComponent,
    ContactUsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoAngularesMaterialModule,
    HttpClientModule , 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastClass: 'toast-custom', // Custom CSS class for all toasts
      positionClass: 'toast-top-right', // Position of the toastr
      // Additional configuration options
    }
    )
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
