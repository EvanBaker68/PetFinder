package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.owner.OwnerDto;
import petfinder.site.common.owner.OwnerService;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/owner")
public class OwnerEndpoint {
    @Autowired
    OwnerService ownerService;

    @GetMapping(value = "/{id}", produces = "application/json")
    public Optional<OwnerDto> getSitter(@PathVariable("id") String id) {
        return ownerService.findOwner(id);
    }


    /*
    @PostMapping(produces = "application/json")
    public OwnerDto saveOwner(@RequestBody OwnerDto owner) {
        //Logger log = (Logger) LoggerFactory.getLogger(getClass());
        //log.info("heyyo");
        ownerService.save(owner);
        return owner;
    }*/

    @PostMapping(value = "/add-owner", consumes = "application/json")
    public OwnerDto saveOwner(@RequestBody OwnerDto owner) {
        ownerService.save(owner);
        return owner;
    }
}
