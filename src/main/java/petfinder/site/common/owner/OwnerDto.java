package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

public class OwnerDto implements Momento<String> {

    private String principal;
    private Long[] currentBookings;
    private Long[] pastBookings;


    public OwnerDto() {
    }

    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings) {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
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
