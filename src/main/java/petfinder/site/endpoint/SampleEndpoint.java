package petfinder.site.endpoint;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import petfinder.site.common.user.UserDao;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;
import petfinder.site.common.user.UserService.RegistrationRequest;

@RestController
@RequestMapping(value="/api/exampleAxios")
public class SampleEndpoint {

    @GetMapping(value="", produces = "application/json")
    public String getString() {
        return "Hello Mentees";
    }

    @GetMapping(value="/andrew", produces = "application/json")
    public String getAndrew() { return "Howdy"; }
}