package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
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
        //return ownerService.findOwner(principal);

        if (principal.equals(SecurityContextHolder.getContext().getAuthentication().getName())) {
            return ownerService.findOwner(principal);
        }
        else {
            return Optional.empty();
        }

    }

    @PostMapping(value = "/add-owner", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public OwnerDto saveOwner(@RequestBody OwnerDto owner) {
        ownerService.save(owner);
        return owner;
    }
}
