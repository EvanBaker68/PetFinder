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

    public UserDto(String principal, String phoneNumber, String firstName, String lastName, String address){
        setLastName(lastName);
        setFirstName(firstName);
        setPhoneNumber(phoneNumber);
        setPrincipal(principal);
        setAddress(address);
    }

    public UserDto(String principal, List<String> roles, String phoneNumber, String firstName, String lastName, String address, Map<String, Object> attributes) throws IllegalArgumentException {
        setPrincipal(principal);
        setRoles(roles);
        setRoles(roles);
        setPhoneNumber(phoneNumber);
        setAttributes(attributes);
        setFirstName(firstName);
        setLastName(lastName);
        setAddress(address);
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

    public void setDeleted(Boolean deleted) throws IllegalArgumentException {
        isDeleted = deleted; }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public String getFirstName() { return firstName; }

    public void setFirstName(String firstName) throws IllegalArgumentException{
        this.firstName = firstName; }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) throws IllegalArgumentException {
        this.lastName = lastName; }

    @JsonIgnore
    @Override
    public String getMomento() {
        return principal;
    }

    public void setPrincipal(String principal) throws IllegalArgumentException {
        if(principal == null){
            throw new IllegalArgumentException("setPrincipal\t was given a null");
        }else if(principal == ""){
            throw new IllegalArgumentException("setPrincipal\t given an empty string");
        }
        this.principal = principal;
    }

    public void setRoles(List<String> roles) throws IllegalArgumentException {
        this.roles = roles;
    }

    public void setType(UserType type) throws IllegalArgumentException {
        this.type = type;
    }

    public void setAttributes(Map<String, Object> attributes)throws IllegalArgumentException {
        this.attributes = attributes;
    }


    private void setPhoneNumber(String phoneNumber) throws IllegalArgumentException {
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address) throws IllegalArgumentException {
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
