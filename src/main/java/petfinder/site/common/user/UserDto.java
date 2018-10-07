package petfinder.site.common.user;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Momento;

import java.util.List;
import java.util.Map;

public class UserDto implements Momento<String> {
	private String principal;
	private String phoneNumber;
	private String name;
	private String address;
	private List<String> roles;
	private UserType type;
	private Map<String, Object> attributes;

	private UserDto() {

	}

	public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes) {
	    setPrincipal(principal);
	    setRoles(roles);
	    setAttributes(attributes);
    }

    //public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes, )

	/*public UserDto(String principal, String phoneNumber, String name, String address) {
	    setPrincipal(principal);
	    setPhoneNumber(phoneNumber);
	    setName(name);
	    setAddress(address);

	}*/

	public String getPrincipal() {
		String temp = principal;
		return temp;
	}

	public List<String> getRoles() {
	    List<String> temp = roles;
	    return temp;
    }

    public Map<String, Object> getAttributes() {
	    return attributes;
    }

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

    public String getAddress() {
        return address;
    }

    @JsonIgnore
	@Override
	public String getMomento() {
		return principal;
	}

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
}