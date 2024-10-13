package ProjetD.itegration.ElkharjaEvent.Controller;


import ProjetD.itegration.ElkharjaEvent.Entity.Avis;
import ProjetD.itegration.ElkharjaEvent.Service.AvisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/avis")
public class AvisController {

    @Autowired
    private AvisService avisService;

    @GetMapping("/all")
    public ResponseEntity<List<Avis>> getAllAvis() {
        List<Avis> avisList = avisService.findAllAvis();
        return new ResponseEntity<>(avisList, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Avis> addAvis(@RequestBody Avis avis) {
        Avis newAvis = avisService.addAvis(avis);
        return new ResponseEntity<>(newAvis, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Avis> updateAvis(@RequestBody Avis avis) {
        Avis updatedAvis = avisService.updateAvis(avis);
        return new ResponseEntity<>(updatedAvis, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{idAvis}")
    public ResponseEntity<?> deleteAvis(@PathVariable("idAvis") Long idAvis) {
        avisService.deleteAvis(idAvis);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<List<Avis>> getAvisByIdEvent(@PathVariable("id") Long id) {
        List<Avis> avisList = avisService.findAvisByIdevent(id);
        if (avisList == null || avisList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(avisList, HttpStatus.OK);
    }

}
