package petfinder.site.endpoint;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;
import petfinder.site.common.user.UserService.RegistrationRequest;
import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserTestEndpoint {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/getOwnersInCity", produces = "application/json")
    @ResponseBody
    public List<Optional<UserDto>> getOwnersInCity(@RequestBody String city) {
        return userService.getOwnersByCity(city);
    }

    @GetMapping(value = "/getSittersInCity/{city}", produces = "application/json")
    @ResponseBody
    public List<Optional<UserDto>> getSittersInCity(@PathVariable("city") String city) {
        System.out.println("in endpoint");
        return userService.getSittersByCity(city);
    }

}
