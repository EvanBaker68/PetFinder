package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

public class SitterDto implements Momento<String> {

    private String principal;
    private Long[] currentBookings;
    private Long[] pastBookings;

    public SitterDto() {}

    public SitterDto(String principal, Long[] currentBookings, Long[] pastBookings) {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }

    public Long[] getCurrentBookings() {
        return currentBookings;
    }

    public Long[] getPastBookings() {
        return pastBookings;
    }

    public String getPrincipal() {
        return principal;
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
