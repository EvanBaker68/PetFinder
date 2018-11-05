package petfinder.site.common.user;

import org.codehaus.jackson.annotate.JsonIgnore;

import alloy.util.Momento;

import java.util.List;
import java.util.Map;

public class UserDto implements Momento<String> {
    public Boolean isEmpty() {
        return false;
    }
    private String principal;
    private List<String> roles;
    private UserType type;
    private Map<String, Object> attributes;
    private String sitter;
    private String owner;
    private Boolean isDeleted = false;


    //TODO: add owner and sitter to tell if the user can sign in as an owner or sitter,
    //and a cookie will be set to be used for the switch to owner/sitter button on the dash

    //TODO: separate address into zip, city, state, and address
    private String phoneNumber;
    private String firstName;
    private String lastName;
    private String address;
    private String city;

    public void setCity(String city){
        this.city = city;
    }

    public String getCity(){
        return city;
    }
    private UserDto() {

    }

    public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes) {
        setPrincipal(principal);
        setRoles(roles);
        setAttributes(attributes);
    }

    public UserDto(String principal, List<String> roles, UserType type, String phoneNumber, String firstName, String lastName,
                   String address, String city, String sitter, String owner, Map<String, Object> attributes) {
        setPrincipal(principal);
        setPhoneNumber(phoneNumber);
        setFirstName(firstName);
        setLastName(lastName);
        setAddress(address);
        setRoles(roles);
        setType(type);
        setAttributes(attributes);
        setCity(city);
        setOwner(owner);
        setSitter(sitter);
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

    public Boolean getDeleted() { return isDeleted; }

    public void setDeleted(Boolean deleted) { isDeleted = deleted; }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public String getFirstName() { return firstName; }

    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }

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

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSitter() {
        return sitter;
    }

    public void setSitter(String sitter) {
        this.sitter = sitter;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }


    public enum UserType {
        OWNER, SITTER
    }
}
