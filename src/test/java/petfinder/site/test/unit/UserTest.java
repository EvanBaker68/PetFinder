package petfinder.site.test.unit;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import petfinder.site.common.user.UserDto;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

    @Nested
    @DisplayName("Testing Functionality of User Constructor")
    public class TestUserSimple{

        @Test
        @DisplayName("Testing Values")
        public void testGoodValues(){
            List<String> listRoles = new ArrayList<>();
            listRoles.add("owner");
            UserDto.UserType userType = UserDto.UserType.OWNER;
            Map<String, Object> swag = new HashMap<>();
            String idk = "Idk";
            Object obj = new Object();
            swag.put(idk, obj);
            String principal = "drewb97@gmail.com";
            String phoneNumber = "5126946416";
            String firstName = "Andrew";
            String lastName = "Bury";
            String address = "1025 la salle house 1";
            UserDto userDto = new UserDto(principal, listRoles, phoneNumber, firstName,lastName, address, swag);
            assertAll(
                    ()-> assertNotNull(userDto),
                    ()-> assertEquals(principal, userDto.getPrincipal()),
                    ()-> assertEquals(principal, userDto.getMomento()),
                    ()-> assertEquals(firstName, userDto.getFirstName()),
                    ()-> assertEquals(lastName, userDto.getLastName()),
                    ()-> assertEquals(phoneNumber, userDto.getPhoneNumber()),
                    ()-> assertEquals(address, userDto.getAddress()),
                    ()-> assertEquals(swag, userDto.getAttributes())
            );
        }


        @Test
        @DisplayName("Testing bad values")
        public void testBadValues(){
            List<String> listRoles = new ArrayList<>();
            listRoles.add("owner");
            UserDto.UserType userType = UserDto.UserType.OWNER;
            Map<String, Object> swag = new HashMap<>();
            String idk = "Idk";
            Object obj = new Object();
            swag.put(idk, obj);
            String principal = "drewb97@gmail.com";
            String phoneNumber = "5126946416";
            String firstName = "Andrew";
            String lastName = "Bury";
            String address = "1025 la salle house 1";
            UserDto userDto = new UserDto(principal, listRoles, phoneNumber, firstName,lastName, address, swag);
            assertAll(
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        userDto.setPrincipal(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        userDto.setPrincipal("");
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        userDto.setFirstName(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        userDto.setLastName(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        userDto.setAddress(null);
                    })
            );
        }

    }

}
