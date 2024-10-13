package ProjetD.itegration.ElkharjaEvent.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false ,updatable = false)
    private Long idEvent;
    private String Title;
    private String Place;
    private String Description;
    private int Capacity;
    private String Image;
    private Date Startdate;
    private double price;
    private String Categorie;



    public Event(){

    }

    public Event(Long idEvent, String title, String place, String description, int capacity, String image, Date startdate, double price, String categorie) {
        this.idEvent = idEvent;
        Title = title;
        Place = place;
        Description = description;
        Capacity = capacity;
        Image = image;
        Startdate = startdate;
        this.price = price;
        Categorie = categorie;
    }

    public Long getIdEvent() {
        return idEvent;
    }

    public void setIdEvent(Long idEvent) {
        this.idEvent = idEvent;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getPlace() {
        return Place;
    }

    public void setPlace(String place) {
        Place = place;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getCapacity() {
        return Capacity;
    }

    public void setCapacity(int capacity) {
        Capacity = capacity;
    }

    public String getImage() {
        return Image;
    }

    public void setImage(String image) {
        Image = image;
    }

    public Date getStartdate() {
        return Startdate;
    }

    public void setStartdate(Date startdate) {
        Startdate = startdate;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategorie() {
        return Categorie;
    }

    public void setCategorie(String categorie) {
        Categorie = categorie;
    }
}
