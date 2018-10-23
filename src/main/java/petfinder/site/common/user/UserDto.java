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
    private Boolean isSitter;
    private Boolean isOwner;

    //TODO: add isOwner and isSitter to tell if the user can sign in as an owner or sitter,
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

    public UserDto(String principal, List<String> roles, UserType type, Map<String, Object> attributes) throws IllegalArgumentException {
        setPrincipal(principal);
        setRoles(roles);
        setAttributes(attributes);
    }

    public UserDto(String principal, List<String> roles, UserType type, String phoneNumber, String firstName, String lastName,
                   String address, Map<String, Object> attributes) throws IllegalArgumentException{
        setPrincipal(principal);
        setPhoneNumber(phoneNumber);
        setFirstName(firstName);
        setLastName(lastName);
        setAddress(address);
        setRoles(roles);
        setType(type);
        setAttributes(attributes);
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


    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public String getFirstName() { return firstName; }

    public void setFirstName(String firstName) throws IllegalArgumentException{
        if(firstName == null){
            throw new IllegalArgumentException("setPrincipal\n given a null");
        } else if(firstName == ""){
            throw new IllegalArgumentException("setPrincipal\n given empty string");
        }
        this.firstName = firstName;
    }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) throws IllegalArgumentException{
        if(lastName == null){
            throw new IllegalArgumentException("setPrincipal\n given a null");
        } else if(lastName == ""){
            throw new IllegalArgumentException("setPrincipal\n given empty string");
        }
        this.lastName = lastName;
    }

    @JsonIgnore
    @Override
    public String getMomento() {
        return principal;
    }

    public void setPrincipal(String principal) throws IllegalArgumentException {
        if(principal == null){
            throw new IllegalArgumentException("setPrincipal\n given a null");
        } else if(principal == ""){
            throw new IllegalArgumentException("setPrincipal\n given empty string");
        }
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


    public void setPhoneNumber(String phoneNumber) throws IllegalArgumentException{
        if(phoneNumber == null){
            throw new IllegalArgumentException("setPrincipal\n given a null");
        } else if(phoneNumber == ""){
            throw new IllegalArgumentException("setPrincipal\n given empty string");
        }
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address) throws IllegalArgumentException{
        if(address == null){
            throw new IllegalArgumentException("setPrincipal\n given a null");
        } else if(address == ""){
            throw new IllegalArgumentException("setPrincipal\n given empty string");
        }
        this.address = address;
    }


    public enum UserType {
        OWNER, SITTER
    }
}
