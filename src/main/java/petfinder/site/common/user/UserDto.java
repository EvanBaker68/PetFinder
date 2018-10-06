package petfinder.site.common.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Identifiable;
import alloy.util.Momento;
import petfinder.site.common.owner.OwnerDto;
import petfinder.site.common.owner.OwnerService;
import petfinder.site.common.sitter.SitterDto;
import petfinder.site.common.sitter.SitterService;

/**
 * Created by jlutteringer on 8/23/17.
 */
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

    private void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}