package petfinder.site.endpoint;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import petfinder.site.common.TestUser.TestUserDto;
import petfinder.site.common.TestUser.TestUserService;
import petfinder.site.common.user.UserDao;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;
import petfinder.site.common.user.UserService.RegistrationRequest;



@RestController
@RequestMapping(value = "/stuff/TestUser")
public class TestUserEndpoint {
    @Autowired
    private TestUserService testUserService;

    @GetMapping(value = "", produces = "application/json")
    public Optional<TestUserDto> getUserDetails() {
        String principal = SecurityContextHolder.getContext().getAuthentication().getName();
        return testUserService.findUserByEmail(principal);
    }


        @PostMapping(value = "/register")
        public void register(@RequestBody TestUserDto testUser) { testUserService.save(testUser);
        }

    }

