package ProjetD.itegration.ElkharjaEvent.Service;

import ProjetD.itegration.ElkharjaEvent.Entity.Contact;
import ProjetD.itegration.ElkharjaEvent.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;
    public List<Contact> findAllcontact() {
        return contactRepository.findAll();
    }
    public Contact addContact(Contact contact) {
        return contactRepository.save(contact);
    }
    public void deletecontact(Long id) {
        contactRepository.deleteById(id);
    }
}
