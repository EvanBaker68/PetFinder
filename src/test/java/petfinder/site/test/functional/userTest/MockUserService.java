package petfinder.site.test.functional.userTest;

import petfinder.site.common.user.UserAuthenticationDto;
import petfinder.site.common.user.UserDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class MockUserService {

    UserDto userDto = new UserDto("69 420 asuh dude", "5126946416","Good","of", "Internet" );

    public UserDto findUser(String id) {
        return new UserDto("69 420 asuh dude", "5126946416","wow","of", "Internet" );
    }

    public List<UserDto> getSittersByCity(String city) {
        ArrayList<UserDto> arr = new ArrayList<>();

        for(int i = 0; i < 8; i++){
            arr.add(new UserDto("sitter" + i, "5126946416","Need","of", "Modern Internet" ));
        }
        return arr;
    }



}
