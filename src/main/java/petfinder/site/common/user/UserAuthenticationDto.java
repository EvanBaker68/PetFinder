package petfinder.site.common.user;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Momento;
import org.springframework.beans.factory.annotation.Autowired;

public class UserAuthenticationDto implements Momento<String> {
	@Autowired
	private UserDto user;
	private String password;

	private UserAuthenticationDto() {

	}

	public UserAuthenticationDto(UserDto user, String password) {
		this.user = user;
		this.password = password;
	}

	public UserDto getUser() {
		return user;
	}

	public String getPassword() {
		return password;
	}

	@JsonIgnore
	@Override
	public String getMomento() {
		return user.getMomento();
	}
}
