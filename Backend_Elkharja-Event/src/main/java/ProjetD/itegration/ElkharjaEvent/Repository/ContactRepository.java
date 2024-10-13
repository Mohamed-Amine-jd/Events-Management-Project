package ProjetD.itegration.ElkharjaEvent.Repository;

import ProjetD.itegration.ElkharjaEvent.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Long> {
}
