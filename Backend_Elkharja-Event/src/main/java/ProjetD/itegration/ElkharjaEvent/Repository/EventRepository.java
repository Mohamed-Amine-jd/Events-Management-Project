package ProjetD.itegration.ElkharjaEvent.Repository;

import ProjetD.itegration.ElkharjaEvent.Entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event,Long> {
}
