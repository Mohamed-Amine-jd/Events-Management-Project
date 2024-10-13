package ProjetD.itegration.ElkharjaEvent.Entity;

import jakarta.persistence.*;
import org.springframework.context.annotation.Configuration;

import java.io.Serializable;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false ,updatable = false)
        private Long iduser;
        private String FirstName;
        private String LastName;
        @Column( unique = true)
        private String email;

        private String Password;
        private String role;

    public User() {

    }

    public User(Long iduser, String firstName, String lastName, String email, String password, String role) {
        this.iduser = iduser;
        FirstName = firstName;
        LastName = lastName;
        this.email = email;

        Password = password;
        this.role = role;
    }

    public Long getIduser() {
        return iduser;
    }

    public void setIduser(Long iduser) {
        this.iduser = iduser;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User{" +
                "iduser=" + iduser +
                ", FirstName='" + FirstName + '\'' +
                ", LastName='" + LastName + '\'' +
                ", email='" + email + '\'' +
                ", Password='" + Password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
