package petfinder.site.test.junit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import petfinder.site.common.user.UserDto;
import static org.junit.jupiter.api.Assertions.*;
public class UserTest {

    @Test
    @DisplayName("Testing to try and make a UserDto go dummy")
    public void testSwagUserDTO(){
        UserDto userDto = new UserDto();
        assertThrows(IllegalArgumentException.class, () -> {
            userDto.setPrincipal(null);
        });

        assertThrows(IllegalArgumentException.class, ()-> {
            UserDto userDto1 = new UserDto();
            userDto1.setPrincipal("");
        });

    }
}
