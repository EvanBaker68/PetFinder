package petfinder.site.common.TestUser;

import alloy.util._Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.user.UserAuthenticationDto;
import petfinder.site.common.user.UserDao;
import petfinder.site.common.user.UserDto;
import petfinder.site.common.user.UserService;

import java.util.Optional;


@Service
public class TestUserService {

    @Autowired
    private TestUserDao testUserDao;

    public Optional<TestUserDto> findUserByEmail(String email) {
        return testUserDao.findUserByEmail(email);
    }



    public void save(TestUserDto testuser) {
        testUserDao.save(testuser);
    }


}
