package ProjetD.itegration.ElkharjaEvent.Repository;

import ProjetD.itegration.ElkharjaEvent.Entity.Reservation;
import ProjetD.itegration.ElkharjaEvent.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByEmailClient(String email);

}
