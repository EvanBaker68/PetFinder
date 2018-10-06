package petfinder.site.common.user;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Momento;
import petfinder.site.common.owner.OwnerDto;
import petfinder.site.common.owner.OwnerService;
import petfinder.site.common.sitter.SitterDto;
import petfinder.site.common.sitter.SitterService;

public class UserDto implements Momento<String> {
	private String principal;
	private String password;
	private String phoneNumber;
	private String name;
	private String address;

	private UserDto() {

	}

	public UserDto(String principal, String password, String phoneNumber, String name, String address) {
	    setPrincipal(principal);
	    setPassword(password);
	    setPhoneNumber(phoneNumber);
	    setName(name);
	    setAddress(address);

	}

	public String getPrincipal() {
		String temp = principal;
		return temp;
	}

    public String getPassword() {
        return password;
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

    private void setPassword(String password) {
        this.password = password;
    }

    private void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    private void setName(String name) {
        this.name = name;
    }

    private void setAddress(String address) {
        this.address = address;
    }

}