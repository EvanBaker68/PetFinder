package petfinder.site.common.owner;

import alloy.util.Momento;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.codehaus.jackson.annotate.JsonIgnore;



public class OwnerDto implements Momento<String> {

    private String principal;
    private int numPets;
    private Long[] currentBookings;
    private Long[] pastBookings;
    private Long[] petIds;
    private Boolean isDeleted;

    public OwnerDto() {
    }

    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] petIds, int numPets) {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setPetIds(petIds);
        setNumPets(numPets);
    }

    public String getPrincipal() {
        return principal;
    }


    public Long[] getCurrentBookings() {
        return currentBookings;
    }

    public Long[] getPastBookings() {
        return pastBookings;
    }

    public Long[] getPetIds() {
        return petIds;
    }


    public int getNumPets() { return numPets; }

    public void setNumPets(int numPets) { this.numPets = numPets; }

    public void setPetIds(Long[] petIds) {
        this.petIds = petIds;
    }

    public void setCurrentBookings(Long[] currentBookings) {
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(Long[] pastBookings) {
        this.pastBookings = pastBookings;
    }

    public void setPrincipal(String principal) {
        this.principal = principal;
    }

    @JsonIgnore
    @Override
    public String getMomento() {
        return principal;
    }
}
