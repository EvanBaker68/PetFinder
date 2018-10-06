package petfinder.site.common.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Identifiable;
import alloy.util.Momento;

/**
 * Created by jlutteringer on 8/23/17.
 */
public class UserDto implements Momento<String> {
	private String principal;
	private List<String> roles;
	private UserType type;
	private Map<String, Object> attributes;
	private Long petId;

	private UserDto() {

	}

	public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes) {
		/*this.principal = principal;
		this.roles = roles;
		this.attributes = attributes;*/
		setPrincipal(principal);
		setRoles(roles);
		setAttributes(attributes);
	}

	public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes, Long petId) {
		/*this.principal = principal;
		this.roles = roles;
		this.attributes = attributes;
		this.petId = petId;*/
		setPrincipal(principal);
		setRoles(roles);
		setPetId(petId);
	}

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


	public Long getPetId() {
		Long temp = petId;
		return temp;
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

	public void setPetId(Long petId) {
		this.petId = petId;
	}



	public enum UserType {
		OWNER, SITTER
	}
}