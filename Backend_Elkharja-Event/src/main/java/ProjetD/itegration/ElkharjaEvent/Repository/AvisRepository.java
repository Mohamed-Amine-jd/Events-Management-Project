package ProjetD.itegration.ElkharjaEvent.Repository;

import ProjetD.itegration.ElkharjaEvent.Entity.Avis;
import ProjetD.itegration.ElkharjaEvent.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvisRepository extends JpaRepository<Avis,Long> {
    List<Avis> findByIdevent(Long id);

}
