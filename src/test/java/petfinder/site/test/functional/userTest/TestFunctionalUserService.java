package petfinder.site.test.functional.userTest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import petfinder.site.common.user.UserDto;
import petfinder.site.test.functional.userTest.MockUserEndpoint;

import static org.junit.jupiter.api.Assertions.*;
public class TestFunctionalUserService {

    MockUserEndpoint mockUserEndpoint = new MockUserEndpoint();

    @Test
    @DisplayName("Testing Basic Functional For User")
    public void testBasicUserFunctional(){
        //assertTrue(true);
        //assertNotNull(mockUserEndpoint.getUserDetails());
        MockUserEndpoint mockUserEndpoint = new MockUserEndpoint();
        UserDto userDto = mockUserEndpoint.getUserDetails();
        assertNotNull(userDto);
    }








}
