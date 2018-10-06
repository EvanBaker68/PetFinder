package petfinder.site.common.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Identifiable;
import alloy.util.Momento;

public class UserDto implements Momento<String> {
	private String principal;
	private String password;
	private Long ownerId;
	private Long sitterId;
	private String phoneNumber;
	private String name;
	private String address;

	private UserDto() {

	}

	public UserDto(String principal, String password, Long ownerId, Long sitterId, String phoneNumber, String name, String address) {
	    setPrincipal(principal);
	    setPassword(password);
	    setOwnerId(ownerId);
	    setSitterId(sitterId);
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

    public Long getOwnerId() {
        return ownerId;
    }

    public Long getSitterId() {
        return sitterId;
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

    private void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    private void setSitterId(Long sitterId) {
        this.sitterId = sitterId;
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