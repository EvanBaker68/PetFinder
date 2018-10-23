package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

//import petfinder.site.ValidationException;

import javax.xml.bind.ValidationEventLocator;
import java.util.ArrayList;
import java.util.List;

public class OwnerDto implements Momento<String> {
    private String principal;
    private Integer numPets;
    private List<Long> currentBookings;
    private List<Long> pastBookings;
    private List<Long> petIds;
    private Boolean isDeleted;

    public OwnerDto(String principal, List<Long> currentBookings, List<Long> pastBookings, List<Long> petIds, int numPets) {
        this.currentBookings = new ArrayList<>();
        this.pastBookings = new ArrayList<>();
        this.petIds = new ArrayList<>();
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setPetIds(petIds);
        setNumPets(numPets);
    }


    /*public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] petIds, int numPets) throws IllegalArgumentException{
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setPetIds(petIds);
        setNumPets(numPets);
    }*/


    public String getPrincipal() {
        String temp = principal;
        return temp;
    }


    public List<Long> getCurrentBookings() {
        List<Long> temp = currentBookings;
        return temp;
    }

    public List<Long> getPastBookings() {
        List<Long> temp = pastBookings;
        return temp;
    }

    public void setCurrentBookings(List<Long> currentBookings) throws IllegalArgumentException {
        if (currentBookings == null) {
            throw new IllegalArgumentException("setCurrentBookings\n was given a null value");
        }
        for (Long itr : currentBookings) {
            if (itr <= 0) {
                throw new IllegalArgumentException("setCurrentBookings\n given a bad bookingId");
            }
        }
        this.currentBookings = currentBookings;
    }

    public List<Long> getPetIds() {
        return petIds;
    }


    public void setNumPets(int numPets) { this.numPets = numPets; }

    public void setPetIds(List<Long> petIds) {
        this.petIds = petIds;
    }


    public void setPastBookings(List<Long> pastBookings) throws IllegalArgumentException{
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
