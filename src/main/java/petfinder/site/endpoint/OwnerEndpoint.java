package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.owner.OwnerDto;
import petfinder.site.common.owner.OwnerService;
import java.util.Optional;

@RestController
@RequestMapping(value = "/owner")
public class OwnerEndpoint {
    @Autowired
    OwnerService ownerService;

    @GetMapping(value = "/{principal:.+}", produces = "application/json")
    @ResponseBody
    public Optional<OwnerDto> getOwner(@PathVariable("principal") String principal) {
        System.out.println("Made it to getjjjjOwner");
//        principal = "b@gmail.com";
        System.out.println(principal);

//        principal = principal.replace("@", "%40");
        return ownerService.findOwner(principal);
    }

    @PostMapping(value = "/add-owner", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public OwnerDto saveOwner(@RequestBody OwnerDto owner) {
        ownerService.save(owner);
        return owner;
    }
}
