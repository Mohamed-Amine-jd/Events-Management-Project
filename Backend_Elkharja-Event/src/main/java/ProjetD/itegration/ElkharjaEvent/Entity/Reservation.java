package ProjetD.itegration.ElkharjaEvent.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false ,updatable = false)
    private Long idReservation;
    private Date DateReser;

    private double price;
    private int nbrPerson;

    private String emailClient;
    private String titlereserv;
    private Long idevent;
    public Reservation(){
    }

    public Reservation(Long idReservation, Date dateReser, double price, int nbrPerson, String emailClient, String titlereserv,Long idevent) {
        this.idReservation = idReservation;
        DateReser = dateReser;
        this.price = price;
        this.nbrPerson = nbrPerson;
        this.emailClient = emailClient;
        this.titlereserv = titlereserv;
        this.idevent=idevent;

    }

    public Long getIdReservation() {
        return idReservation;
    }

    public void setIdReservation(Long idReservation) {
        this.idReservation = idReservation;
    }

    public Date getDateReser() {
        return DateReser;
    }

    public void setDateReser(Date dateReser) {
        DateReser = dateReser;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public long getNbrPerson() {
        return nbrPerson;
    }

    public void setNbrPerson(int nbrPerson) {
        this.nbrPerson = nbrPerson;
    }

    public String getEmailClient() {
        return emailClient;
    }

    public void setEmailClient(String emailClient) {
        this.emailClient = emailClient;
    }

    public String getTitlereserv() {
        return titlereserv;
    }

    public void setTitlereserv(String titlereserv) {
        this.titlereserv = titlereserv;
    }

    public Long getIdevent() {
        return idevent;
    }

    public void setIdevent(Long idevent) {
        this.idevent = idevent;
    }
}
