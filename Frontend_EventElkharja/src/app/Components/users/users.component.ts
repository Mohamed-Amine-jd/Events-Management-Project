import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: User[] = [];

  constructor(private toastr: ToastrService,private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public deleteuser(user: User): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur : ${user.firstName} ?`)) {
      this.userService.deleteUser(user.iduser).subscribe(
        () => {
         this.toastr.success('Utilisateur supprimé avec succès', 'Succès');
          this.getUsers();
        }
      );
      }}


      
  public SearchUser(key: string): void {
    const searchQuery = key ? key.toLowerCase() : '';
    this.users = this.users.filter((item: User) => item.firstName.toLowerCase().indexOf(searchQuery) > -1);
    if(!key){
      this.getUsers();
    }
  }
  
  
  }

  
  



