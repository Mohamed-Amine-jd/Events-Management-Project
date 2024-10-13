package ProjetD.itegration.ElkharjaEvent.Controller;

import ProjetD.itegration.ElkharjaEvent.Entity.Contact;
import ProjetD.itegration.ElkharjaEvent.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/contacte")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping("/all")
    public ResponseEntity<List<Contact>> getAllcontact() {
        List<Contact> contacts = contactService.findAllcontact();
        return new ResponseEntity<>(contacts, HttpStatus.OK);
    }



    @PostMapping("/add")
    public ResponseEntity<Contact> addContact(@RequestBody Contact contact) {
        // Print received contact details for debugging (optional)
        System.out.println(contact.toString());

        // Add the contact using the ContactService
        Contact newContact = contactService.addContact(contact);

        // Return the newly added contact and HTTP status code
        return new ResponseEntity<>(newContact, HttpStatus.CREATED);
    }



    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletecontact(@PathVariable("id") Long id) {
        contactService.deletecontact(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
