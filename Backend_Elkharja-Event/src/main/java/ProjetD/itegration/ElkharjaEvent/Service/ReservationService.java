package ProjetD.itegration.ElkharjaEvent.Service;


import ProjetD.itegration.ElkharjaEvent.Entity.Event;
import ProjetD.itegration.ElkharjaEvent.Entity.Reservation;
import ProjetD.itegration.ElkharjaEvent.Entity.User;
import ProjetD.itegration.ElkharjaEvent.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> findAllReservations() {
        return reservationRepository.findAll();
    }

    public Reservation findReservationById(Long id) {
        return reservationRepository.findById(id).orElse(null);
    }

    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public Reservation updateReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }
    public List<Reservation> findReservationByEmail(String emailClient) {
        return reservationRepository.findByEmailClient(emailClient);
    }
}
