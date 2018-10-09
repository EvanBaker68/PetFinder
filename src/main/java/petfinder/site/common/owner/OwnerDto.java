package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import petfinder.site.ValidationException;

import javax.xml.bind.ValidationEventLocator;


public class OwnerDto implements Momento<String> {
    private String principal;
    private Long[] currentBookings;
    private Long[] pastBookings;


    public OwnerDto() {
    }

    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings) throws ValidationException {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }

    public String getPrincipal() {
        String temp = principal;
        return temp;
    }


    public Long[] getCurrentBookings() {
        Long[] temp = currentBookings;
        return temp;
    }

    public Long[] getPastBookings() {
        Long[] temp = pastBookings;
        return temp;
    }

    public void setCurrentBookings(Long[] currentBookings) throws ValidationException {
        if(currentBookings == null){
            throw new ValidationException("setCurrentBookings","was given a null value");
        }
        for(Long itr : currentBookings){
            if(itr <= 0){
                throw new ValidationException("setCurrentBookings", "given a bad bookingId");
            }
        }
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(Long[] pastBookings) throws ValidationException{
        if(pastBookings == null){
            throw new ValidationException("setPastBookings", "was given a null value");
        }
        for(Long itr : pastBookings){
            if(itr <= 0){
                throw new ValidationException("setPastBookings", "was given a bad bookingId");
            }
        }
        this.pastBookings = pastBookings;
    }

    public void setPrincipal(String principal) throws ValidationException {
        if(principal == null){
            throw new ValidationException("setPrincipal", "was given a null value");
        }
        this.principal = principal;
    }

    @JsonIgnore
    @Override
    public String getMomento() {
        String temp = principal;
        return temp;
    }
}
