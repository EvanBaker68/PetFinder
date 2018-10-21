package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.swing.text.StyledEditorKit;
import java.time.LocalDateTime;

public class SitterDto implements Momento<String> {

    private String principal;
    private Long[] currentBookings;
    private Long[] pastBookings;
    private Long[] datesAvailable;
    private Double rate;
    private Boolean isDeleted;


    //Main Constructor
    public SitterDto(String principal, Double rate) {
        setPrincipal(principal);
        setRate(rate);
    }

    public SitterDto() {}

    public SitterDto(String principal) {
        setPrincipal(principal);
    }

    //Temporary until we get rid of Availability
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

    public Double getRate() { return rate; }

    public void setRate(double rate) { this.rate = rate; }

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

    public Long[] getDatesAvailable() {
        return datesAvailable;
    }

    public void setDatesAvailable(Long[] datesAvailable) {
        this.datesAvailable = datesAvailable;
    }
}

