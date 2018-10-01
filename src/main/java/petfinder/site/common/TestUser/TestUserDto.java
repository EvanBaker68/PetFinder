package petfinder.site.common.TestUser;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

public class TestUserDto implements Momento<String> {

    private String email;
    private String password;

    @JsonIgnore
    @Override
    public String getMomento() {
        return email;
    }

}
