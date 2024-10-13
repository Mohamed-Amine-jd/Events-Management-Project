package ProjetD.itegration.ElkharjaEvent.Controller;


import ProjetD.itegration.ElkharjaEvent.Entity.Event;
import ProjetD.itegration.ElkharjaEvent.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.findAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Event> addEvent(@RequestBody Event event) {

        Event newEvent = eventService.addEvent(event);

        return new ResponseEntity<>(newEvent, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Event> updateEvent(@RequestBody Event event) {
        Event updatedEvent = eventService.updateEvent(event);
        return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{idEvent}")
    public ResponseEntity<?> deleteEvent(@PathVariable("idEvent") Long idEvent) {
        eventService.deleteEvent(idEvent);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find/{idEvent}")
    public ResponseEntity<Event> getUserById(@PathVariable("idEvent") Long idEvent) {
        Event event = eventService.findEventById(idEvent);
        if (event != null) {
            return new ResponseEntity<>(event, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
