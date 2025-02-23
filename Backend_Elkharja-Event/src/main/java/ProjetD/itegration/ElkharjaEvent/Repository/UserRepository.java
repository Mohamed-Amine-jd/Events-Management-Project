package ProjetD.itegration.ElkharjaEvent.Repository;

import ProjetD.itegration.ElkharjaEvent.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
