package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;
//import petfinder.site.ValidationException;

import javax.swing.text.StyledEditorKit;
import java.time.LocalDateTime;
import java.util.List;

public class SitterDto implements Momento<String> {

    private String principal;
    private List<Long> currentBookings;
    private List<Long> pastBookings;
    private List<Long> datesAvailable;
    private Double rate;
    private Boolean isDeleted;


    //Main Constructor
    public SitterDto(String principal, Double rate) {
        setPrincipal(principal);
        setRate(rate);
    }

    public SitterDto() {}

    public SitterDto(String principal) throws IllegalArgumentException{
        setPrincipal(principal);
    }

    //Temporary until we get rid of Availability
    public SitterDto(String principal, List<Long> currentBookings, List<Long> pastBookings) throws IllegalArgumentException{
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }

    public List<Long> getCurrentBookings() {
        return currentBookings;
    }

    public List<Long> getPastBookings() {
        return pastBookings;
    }

    public String getPrincipal() {
        return principal;
    }

    public Double getRate() { return rate; }

    public void setRate(Double rate) { this.rate = rate; }

    public void setCurrentBookings(List<Long> currentBookings) {
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(List<Long> pastBookings) {
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

    public List<Long> getDatesAvailable() {
        return datesAvailable;
    }

    public void setDatesAvailable(List<Long> datesAvailable) {
        this.datesAvailable = datesAvailable;
    }
}

