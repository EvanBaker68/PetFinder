package petfinder.site.endpoint;

import org.springframework.web.bind.annotation.*;
import petfinder.site.common.sitter.SitterService;
import petfinder.site.common.sitter.SitterDto;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import petfinder.site.common.sitter.SitterService;

@RestController
@RequestMapping(value = "/api/sitter")
public class SitterEndpoint {

    @Autowired
    SitterService sitterService;

    @GetMapping(value = "/{id}", produces = "application/json")
    public Optional<SitterDto> getSitter(@PathVariable("id") String id) {
        return sitterService.findSitter(id);
    }


    @PostMapping(produces = "application/json")
    public SitterDto savePet(@RequestBody SitterDto pet) {
        //Logger log = (Logger) LoggerFactory.getLogger(getClass());
        //log.info("heyyo");
        sitterService.save(pet);
        return pet;
    }
}
