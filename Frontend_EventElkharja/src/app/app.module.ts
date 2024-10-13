import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';
import { UsersComponent } from './Components/users/users.component';
import { ToastrModule } from 'ngx-toastr';
import { EventsComponent } from './Components/events/events.component';
import { ManageeventComponent } from './Components/manageevent/manageevent.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { MyreservationsComponent } from './Components/myreservations/myreservations.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TestComponent } from './Components/test/test.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeHeaderComponent } from './Components/home-header/home-header.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { ClientHeaderComponent } from './Components/client-header/client-header.component';
import { AvisOfEventComponent } from './Components/avis-of-event/avis-of-event.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HomeAdminComponent,
    UsersComponent,
    EventsComponent,
    ManageeventComponent,
    LoginComponent,
    RegisterComponent,
    EventDetailsComponent,
    MyreservationsComponent,
    ContactComponent,
    TestComponent,
    AboutComponent,
    HomeHeaderComponent,
    MessagesComponent,
    ClientHeaderComponent,
    AvisOfEventComponent,
 
    
   


   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot( {timeOut: 4000,
      positionClass: 'toast-bottom-right',progressBar:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

