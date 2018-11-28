package petfinder.site.test.functional.userTest;

import petfinder.site.common.user.UserDto;

public class MockUserEndpoint {
    MockUserService mockUserService = new MockUserService();

    public UserDto getUserDetails() {
        return mockUserService.findUser("12");
    }

}
