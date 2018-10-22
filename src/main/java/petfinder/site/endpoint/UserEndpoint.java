package petfinder.site.endpoint;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;
import petfinder.site.common.user.UserService.RegistrationRequest;
import java.util.List;

/**
 * Created by jlutteringer on 8/23/17.
 */
@RestController
@RequestMapping(value = "/api/user")
public class UserEndpoint {
	@Autowired
	private UserService userService;

	@GetMapping(value = "", produces = "application/json")
	@ResponseBody
	public Optional<UserDto> getUserDetails() {
		String principal = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(principal);
		return userService.findUserByPrincipal(principal);
	}

	@PostMapping(value = "/register", produces = "application/json", consumes = "application/json")
	public UserDto register(@RequestBody RegistrationRequest request) {
		return userService.register(request);
	}

	@GetMapping(value = "/getSittersInCity", produces = "application/json")
    @ResponseBody
    public List<UserDto> getSittersInCity(@RequestBody String city) {
	    return userService.getSittersByCity(city);
    }

    @GetMapping(value = "/getOwnersInCity", produces = "application/json")
    @ResponseBody
    public List<UserDto> getOwnersInCity(@RequestBody String city) {
        return userService.getOwnersByCity(city);
    }


	/*@PostMapping(value = "/setPetForUser")
	 */


}
