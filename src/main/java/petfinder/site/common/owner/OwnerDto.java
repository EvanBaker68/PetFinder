package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

//import petfinder.site.ValidationException;

import javax.xml.bind.ValidationEventLocator;
import java.util.List;

public class OwnerDto implements Momento<String> {
    private String principal;
    private Integer numPets;
    private Long[] currentBookings;
    private Long[] pastBookings;
    private Long[] petIds;
    private Boolean isDeleted;

    public OwnerDto(String principal, List<Long> currentBookings, List<Long> pastBookings, List<Long> petIds, int numPets) {
    }


    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] petIds, int numPets) throws IllegalArgumentException{
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setPetIds(petIds);
        setNumPets(numPets);
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

    public void setCurrentBookings(Long[] currentBookings) throws IllegalArgumentException {
        if (currentBookings == null) {
            throw new IllegalArgumentException("setCurrentBookings\n was given a null value");
        }
        for (Long itr : currentBookings) {
            if (itr <= 0) {
                throw new IllegalArgumentException("setCurrentBookings\n given a bad bookingId");
            }
        }
    }

    public Long[] getPetIds() {
        return petIds;
    }


    public void setNumPets(int numPets) { this.numPets = numPets; }

    public void setPetIds(Long[] petIds) {
        this.petIds = petIds;
    }


    public void setPastBookings(Long[] pastBookings) throws IllegalArgumentException{
        if(pastBookings == null){
            throw new IllegalArgumentException("setPastBookings\n was given a null value");
        }
        for(Long itr : pastBookings){
            if(itr <= 0){
                throw new IllegalArgumentException("setPastBookings\n was given a bad bookingId");
            }
        }
        this.pastBookings = pastBookings;
    }

    public void setPrincipal(String principal) throws IllegalArgumentException {
        if(principal == null){
            throw new IllegalArgumentException("setPrincipal\n was given a null value");
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
