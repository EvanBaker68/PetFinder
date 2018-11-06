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

    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] ids, int numPets) throws IllegalArgumentException{
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setIds(ids);
        setNumPets(numPets);
    }

    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] ids) throws IllegalArgumentException {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setIds(ids);
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

    public void setNumPets(int numPets) throws IllegalArgumentException {
        if(numPets < 0){
            throw new IllegalArgumentException("setNumPets\t given a bad value");
        }
        this.numPets = numPets; }

    public void setIds(Long[] ids) {
        if(ids == null){
            throw new IllegalArgumentException("setIds\t was given a null");
        } else {
            for(Long i : ids){
                if(i < 0L){
                    throw new IllegalArgumentException("setIds\t was given a bad id val");
                }
            }
        }
        this.ids = ids;
    }

    public void setCurrentBookings(Long[] currentBookings) throws IllegalArgumentException{
        if(currentBookings == null){
            throw new IllegalArgumentException("setCurrentBookings\t given a null");
        } else {
            for(Long i: currentBookings){
                if(i < 0L){
                    throw new IllegalArgumentException("setCurrentBookings\t given a bad value");
                }
            }
        }
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(Long[] pastBookings) throws IllegalArgumentException{
        if(pastBookings == null){
            throw new IllegalArgumentException("setPastBookings\t given a bad value");
        } else{
            for(Long i: pastBookings){
                if(i < 0L){
                    throw new IllegalArgumentException("setPastBookings\t given a bad value");
                }
            }
        }
        this.pastBookings = pastBookings;
    }

    public void setPrincipal(String principal)throws IllegalArgumentException{
        if(principal == null){
            throw new IllegalArgumentException("setPrincipal\t given a null");
        }
        this.principal = principal;
    }

    @JsonIgnore
    @Override
    public String getMomento() {
        return principal;
    }
}
