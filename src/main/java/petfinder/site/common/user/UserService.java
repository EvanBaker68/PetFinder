package petfinder.site.common.user;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import alloy.util._Lists;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public Optional<UserDto> findUser(String id) {
		return userDao.findUser(id).map(UserAuthenticationDto::getUser);
	}

	public Optional<UserDto> findUserByPrincipal(String principal) {
		System.out.println("Finding by prinicpal" + principal);
		return userDao.findUserByPrincipal(principal).map(UserAuthenticationDto::getUser);
	}

	public Optional<UserAuthenticationDto> findUserAuthenticationByPrincipal(String principal) {
		return userDao.findUserByPrincipal(principal);
	}

	public static class RegistrationRequest {
		private String principal;
		private String password;
		private Map<String, Object> attributes;

		//Not sure if I need these instead of a map of attributes
		private String phoneNumber;
		private String firstName;
		private String lastName;
		private String address;
		private String city;
		//private Map<String, Object> attributes;

		public String getPrincipal() {
			return principal;
		}

		public void setPrincipal(String principal) {
			this.principal = principal;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getPhoneNumber() {
			return phoneNumber;
		}

		public void setPhoneNumber(String phoneNumber) {
			this.phoneNumber = phoneNumber;
		}

		public String getFirstName() { return firstName; }

		public void setFirstName(String firstName) { this.firstName = firstName; }

		public String getLastName() { return lastName; }

		public void setLastName(String lastName) { this.lastName = lastName; }


		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public Map<String, Object> getAttributes() {
			return attributes;
		}

		public void setAttributes(Map<String, Object> attributes) {
			this.attributes = attributes;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}
	}

	public UserDto register(RegistrationRequest request) {
		UserAuthenticationDto userAuthentication = new UserAuthenticationDto(
				//new UserDto(request.getPrincipal(), request.getPhoneNumber(), request.getName(), request.getAddress()), passwordEncoder.encode(request.getPassword()));
				new UserDto(request.getPrincipal(), _Lists.list("ROLE_USER"), UserDto.UserType.OWNER, request.getPhoneNumber(),
						request.getFirstName(), request.getLastName(), request.getAddress(), request.getCity(), request.getAttributes()), passwordEncoder.encode(request.getPassword()));
		userDao.save(userAuthentication);
		return userAuthentication.getUser();
	}
	public List<UserDto> getSittersByCity(String city) {
		List<Optional<UserAuthenticationDto>> listDtos = userDao.findByCity(city, "sitter");
		//return userDao.findByCity(city, "sitter");
		List<UserAuthenticationDto> filteredUsers = listDtos.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
		List<UserDto> newList = new ArrayList<>();
		for(UserAuthenticationDto i : filteredUsers){
			newList.add(i.getUser());
		}
		return newList;
	}

	public List<UserDto> getOwnersByCity(String city) {
		//return userDao.findByCity(city, "owner");
		List<Optional<UserAuthenticationDto>> listDtos = userDao.findByCity(city, "owner");
		List<UserAuthenticationDto> filteredUsers = listDtos.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
		List<UserDto> newList = new ArrayList<>();
		for(UserAuthenticationDto i : filteredUsers){
			newList.add(i.getUser());
		}
		return newList;
	}


}
