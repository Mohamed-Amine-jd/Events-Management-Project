import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/Interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  public messages: Contact[] = [];

  constructor(private toastr: ToastrService,private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  public getContacts(): void {
    this.contactService.getContacts().subscribe(
      (response: Contact[]) => {
        this.messages = response;   
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public DeleteMessage(x: Contact): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le message : ${x.id} ?`)) {
      this.contactService.deletecontact(x.id).subscribe(
        () => {
          this.toastr.success('Le message a été supprimé avec succès', 'Succès');
          this.getContacts();
        },
        (error: HttpErrorResponse) => {
          console.error(`Erreur lors de la suppression deu message : ${error.message}`);
        }
      );
      }}



  
  
  }

  
  