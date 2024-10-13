package ProjetD.itegration.ElkharjaEvent.Controller;

import ProjetD.itegration.ElkharjaEvent.Entity.Event;
import ProjetD.itegration.ElkharjaEvent.Entity.Reservation;
import ProjetD.itegration.ElkharjaEvent.Service.ReservationService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.model.checkout.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> reservations = reservationService.findAllReservations();
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Reservation> addReservation(@RequestBody Reservation reservation) {
        Reservation newReservation = reservationService.addReservation(reservation);
        return new ResponseEntity<>(newReservation, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Reservation> updateReservation(@RequestBody Reservation reservation) {
        Reservation updatedReservation = reservationService.updateReservation(reservation);
        return new ResponseEntity<>(updatedReservation, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{idReservation}")
    public ResponseEntity<?> deleteReservation(@PathVariable("idReservation") Long idReservation) {
        reservationService.deleteReservation(idReservation);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<List<Reservation>> getReservationByEmail(@PathVariable("email") String emailClient) {
      List<Reservation> reservation=reservationService.findReservationByEmail(emailClient);
        if (reservation == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(reservation, HttpStatus.OK);
    }
    @GetMapping("/findd/{idReserv}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable("idReserv") Long idReservation) {
        Reservation reservation = reservationService.findReservationById(idReservation);
        if (reservation != null) {
            return new ResponseEntity<>(reservation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/payment")
    public String createCheckoutSession(@RequestBody Reservation reservation) throws StripeException {

        Stripe.apiKey = "sk_test_51OkBnbD2DikGESyEx6iTgmuBX8Nh5jaTFyUsTLWwhCwy9jjCXicJBrwIrrBJsmHMJDCeUQvEH5ayRsFSaKFXxOA2008Cz7uo1G";
        System.out.println(reservation);
        System.out.println(reservation.getEmailClient());
        SessionCreateParams.Builder builder = new SessionCreateParams.Builder();
        builder.addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD);
        builder.setMode(SessionCreateParams.Mode.PAYMENT);
        builder.setSuccessUrl("http://localhost:4200/success");
        builder.setCancelUrl("http://localhost:4200/cancel");

        builder.addLineItem(SessionCreateParams.LineItem.builder()
                .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                        .setCurrency("usd")
                        .setUnitAmount((long) (reservation.getPrice() * 100)) // Convert price to cents
                        .setProductData(
                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                        .setName(reservation.getTitlereserv())
                                        .build()
                        )
                        .build())
                .setQuantity(reservation.getNbrPerson())
                .build());

        SessionCreateParams createParams = builder.build();
        Session session = Session.create(createParams);

        return session.getUrl();
    }
}
