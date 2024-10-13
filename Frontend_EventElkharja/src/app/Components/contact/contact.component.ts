import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/Interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public contacts: Contact[] = [];
  constructor(private toastr: ToastrService,private fb : FormBuilder  , private contactService:ContactService , private router : Router) {}

  ngOnInit() {
    this.getContacts();
  }

  public getContacts(): void {
    this.contactService.getContacts().subscribe(
      (response: Contact[]) => {
        this.contacts = response;
          },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public AjouterMessage(addForm: NgForm): void {
    if (addForm.valid) {
      const contact: Contact = addForm.value;
     
      console.log(contact)
    this.contactService.addContact(contact).subscribe(
      (response: Contact) => {
           this.getContacts;
           this.toastr.success("Message envoyer avec succesé","success")
        addForm.reset();
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


}}