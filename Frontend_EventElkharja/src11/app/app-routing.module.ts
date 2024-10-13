import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsListComponent } from './components/clubs-list/clubs-list.component';
import { UpdateClubComponent } from './components/update-club/update-club.component';
import { HomeComponent } from './components/home/home.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { AddClubComponent } from './components/add-club/add-club.component';
import { OutingsComponent } from './components/outings/outings.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent } , 
  { path: 'clubs', component: ClubsComponent } , 
  { path: 'addclub', component: AddClubComponent } , 
  { path: 'outings', component: OutingsComponent } , 
  { path: 'competitions', component: CompetitionsComponent } , 
  { path: 'contactus', component: ContactUsComponent } , 
  { path: 'clubslist', component: ClubsListComponent } , 
  { path: 'updateclub/:id', component: UpdateClubComponent } ,
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
