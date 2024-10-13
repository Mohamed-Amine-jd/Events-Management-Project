package ProjetD.itegration.ElkharjaEvent.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Avis {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false ,updatable = false)
    private Long idavis;
    private Long idevent;
    private String emailClient;
    private String message;
    


    public Avis(Long idavis, Long idevent, String emailClient, String message) {
        this.idavis = idavis;
        this.idevent = idevent;
        this.emailClient = emailClient;
        this.message = message;
    }
    public Avis(){

    }

    public Long getIdavis() {
        return idavis;
    }

    public void setIdavis(Long idavis) {
        this.idavis = idavis;
    }

    public Long getIdevent() {
        return idevent;
    }

    public void setIdevent(Long idevent) {
        this.idevent = idevent;
    }

    public String getEmailClient() {
        return emailClient;
    }

    public void setEmailClient(String emailClient) {
        this.emailClient = emailClient;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
