package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;



public class OwnerDto implements Momento<String> {

    private String principal;
    private int numPets;
    private Long[] currentBookings;
    private Long[] pastBookings;
    private Long[] ids;
    private Boolean isDeleted;

    public OwnerDto() {
    }

    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] ids, int numPets) {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setIds(ids);
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

    public Long[] getIds() {
        return ids;
    }


    public int getNumPets() { return numPets; }

    public void setNumPets(int numPets) { this.numPets = numPets; }

    public void setIds(Long[] ids) {
        this.ids = ids;
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
