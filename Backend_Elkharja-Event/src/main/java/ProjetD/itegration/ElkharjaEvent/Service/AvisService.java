package ProjetD.itegration.ElkharjaEvent.Service;

import ProjetD.itegration.ElkharjaEvent.Entity.Avis;
import ProjetD.itegration.ElkharjaEvent.Entity.Reservation;
import ProjetD.itegration.ElkharjaEvent.Repository.AvisRepository;
import ProjetD.itegration.ElkharjaEvent.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvisService {

    @Autowired
    private AvisRepository avisRepository;

    public List<Avis> findAllAvis() {
        return avisRepository.findAll();
    }

    public Avis findAvisById(Long id) {
        return avisRepository.findById(id).orElse(null);
    }

    public Avis addAvis(Avis avis) {
        return avisRepository.save(avis);
    }

    public Avis updateAvis(Avis avis) {
        return avisRepository.save(avis);
    }

    public void deleteAvis(Long id) {
        avisRepository.deleteById(id);
    }
    public List<Avis> findAvisByIdevent(Long id) {
        return avisRepository.findByIdevent(id);
    }
}
