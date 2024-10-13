package ProjetD.itegration.ElkharjaEvent.Controller;


import ProjetD.itegration.ElkharjaEvent.Config.ByCryptConfig;
import ProjetD.itegration.ElkharjaEvent.Entity.User;
import ProjetD.itegration.ElkharjaEvent.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    private ByCryptConfig byCryptConfig;

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        User user = userService.findUserByEmail(loginUser.getEmail());
        
        boolean correctPassword = byCryptConfig.encoder().matches(loginUser.getPassword(),user.getPassword());
        if (user != null && correctPassword) {
            // Login successful
            // Return the role as JSON
            return ResponseEntity.ok().body("{\"role\": \"" + user.getRole() + "\"}");
        } else {
            // Login failed
            return new ResponseEntity<>("Invalid phone or password", HttpStatus.UNAUTHORIZED);
        }
    }

}
