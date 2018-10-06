package petfinder.site.common.user;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Momento;

public class UserDto implements Momento<String> {
	private String principal;
	private String password;
	private String phoneNumber;
	private String name;
	private String address;

    private OwnerDto owner;
    private OwnerService ownerService;
    private SitterDto sitter;
    private SitterService sitterService;

	private UserDto() {

	}

	public UserDto(String principal, String password, Long ownerId, Long sitterId, String phoneNumber, String name, String address) {
	    setPrincipal(principal);
	    setPassword(password);
	    setPhoneNumber(phoneNumber);
	    setName(name);
	    setAddress(address);

	    owner = new OwnerDto();
	    ownerService = new OwnerService();
	    sitter = new SitterDto();
	    sitterService = new SitterService();
	    setSitterId(sitterId);
	    setOwnerId(ownerId);
	}

	public String getPrincipal() {
		String temp = principal;
		return temp;
	}

    public String getPassword() {
        return password;
    }

    public Long getOwnerId() {
        return owner.getOwnerId();
    }

    public Long getSitterId() {
        return sitter.getSitterId();
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
        owner.setOwnerId(ownerId);
    }

    private void setSitterId(Long sitterId) {
        sitter.setSitterId(sitterId);
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