package petfinder.site.common.user;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Momento;

import java.util.List;
import java.util.Map;

public class UserDto implements Momento<String> {
	private String principal;
	private List<String> roles;
	private UserType type;
	private Map<String, Object> attributes;
<<<<<<< HEAD
=======


    private String phoneNumber;
    private String name;
    private String address;

>>>>>>> 56e47e5e6916a02a71dd9c4ad68b5bd024b2ecb6

	private UserDto() {

	}

	public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes) {
<<<<<<< HEAD
		this.principal = principal;
		this.roles = roles;
		this.attributes = attributes;
=======
	    setPrincipal(principal);
	    setRoles(roles);
	    setAttributes(attributes);
    }

	public UserDto(String principal, List<String> roles, UserType type, String phoneNumber, String name, String address) {
	    setPrincipal(principal);
	    setPhoneNumber(phoneNumber);
	    setName(name);
	    setAddress(address);
	    setRoles(roles);
	    setType(type);

>>>>>>> 56e47e5e6916a02a71dd9c4ad68b5bd024b2ecb6
	}

	public String getPrincipal() {
		return principal;
	}

	public List<String> getRoles() {
<<<<<<< HEAD
		return roles;
	}
=======
	    List<String> temp = roles;
	    return temp;
    }
>>>>>>> 56e47e5e6916a02a71dd9c4ad68b5bd024b2ecb6

    public Map<String, Object> getAttributes() {
	    return attributes;
    }

<<<<<<< HEAD
	public UserType getType() {
		return type;
	}
=======
    public UserType getType() {
	    UserType temp = type;
	    return temp;
    }


    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getName() {
        return name;
    }
>>>>>>> 56e47e5e6916a02a71dd9c4ad68b5bd024b2ecb6

    public String getAddress() {
        return address;
    }


    @JsonIgnore
	@Override
	public String getMomento() {
		return principal;
	}

<<<<<<< HEAD
	public enum UserType {
		OWNER, SITTER
	}
=======
	public void setPrincipal(String principal) {
		this.principal = principal;
	}

	public void setRoles(List<String> roles) {
	    this.roles = roles;
    }

    public void setType(UserType type) {
	    this.type = type;
    }

    public void setAttributes(Map<String, Object> attributes) {
	    this.attributes = attributes;
    }


    private void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public enum UserType {
	    OWNER, SITTER
    }
>>>>>>> 56e47e5e6916a02a71dd9c4ad68b5bd024b2ecb6
}