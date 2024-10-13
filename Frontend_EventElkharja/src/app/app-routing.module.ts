import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HomeAdminComponent } from './Components/home-admin/home-admin.component';
import { UsersComponent } from './Components/users/users.component';
import { EventsComponent } from './Components/events/events.component';
import { ManageeventComponent } from './Components/manageevent/manageevent.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { MyreservationsComponent } from './Components/myreservations/myreservations.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TestComponent } from './Components/test/test.component';
import { AboutComponent } from './Components/about/about.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { AgentGuard } from './Components/guard/user.guard';
import { SuccesComponent } from './Components/succes/succes.component';
import { AvisOfEventComponent } from './Components/avis-of-event/avis-of-event.component';




const routes: Routes = [
 {path: 'home', component: HomeComponent },
 {path: 'homeadmin', component: HomeAdminComponent },
 {path: 'users', component: UsersComponent },
 {path: 'events', component: EventsComponent },
 {path: 'crud', component: ManageeventComponent },
 {path: 'login', component: LoginComponent },
 {path: 'register', component: RegisterComponent },
 {path: 'reservation', component: MyreservationsComponent },
 { path: 'event/:id', component: EventDetailsComponent ,
canActivate: [AgentGuard]
 }, 
 {path: 'contact', component: ContactComponent },
 {path: 'test', component: TestComponent },
 {path: 'about', component: AboutComponent },
 {path: 'message', component: MessagesComponent },
 {path: 'success', component: SuccesComponent },
 {path: 'aviss/:id', component: AvisOfEventComponent },

 {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
