package ProjetD.itegration.ElkharjaEvent.Controller;

import ProjetD.itegration.ElkharjaEvent.Config.ByCryptConfig;
import ProjetD.itegration.ElkharjaEvent.Entity.User;
import ProjetD.itegration.ElkharjaEvent.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private ByCryptConfig byCryptConfig;

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUser();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{iduser}")
    public ResponseEntity<User> getUserById(@PathVariable("iduser") Long iduser) {
        User user = userService.findUserById(iduser);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        String hashedpass =(byCryptConfig.encoder().encode(user.getPassword()));
        user.setPassword(hashedpass);
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updateUser = userService.updateUser(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{iduser}")
    public ResponseEntity<?> deleteUser(@PathVariable("iduser") Long iduser) {
        userService.deleteUser(iduser);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
        User user = userService.findUserByEmail(email);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }



}
