package ProjetD.itegration.ElkharjaEvent.Service;

import ProjetD.itegration.ElkharjaEvent.Entity.User;
import ProjetD.itegration.ElkharjaEvent.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAllUser() {
        return userRepository.findAll();
    }
    public void save(User user) {
        userRepository.save(user);
    }
    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public  User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }



}
