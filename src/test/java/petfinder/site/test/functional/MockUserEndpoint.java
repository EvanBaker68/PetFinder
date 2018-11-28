package petfinder.site.test.functional;

import org.springframework.security.core.userdetails.User;
import petfinder.site.common.user.UserDto;

public class MockUserEndpoint {
    MockUserService mockUserService = new MockUserService();

    public UserDto getUserDetails() {
        return mockUserService.findUser("12");
    }

}
