package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import java.time.LocalDateTime;

public class SitterDto implements Momento<String> {

    private String principal;
    private Long[] currentBookings;
    private Long[] pastBookings;
    private Availability[] availability;// dont think we need
    public Integer availableTimes = -1; // dont think we need
    private Long[] datesAvailable;


    //Main Constructor
    public SitterDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] datesAvailable) {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setDatesAvailable(datesAvailable);
    }

    public SitterDto() {}

    public SitterDto(String principal) {
        setPrincipal(principal);
    }

    //Temporary until we get rid of Availability
    public SitterDto(String principal, Long[] currentBookings, Long[] pastBookings, Availability[] availability) {
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
        setAvailability(availability);
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

    public Availability[] getAvailability() {
        return availability;
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

    public void setAvailability(Availability[] availability) {
        this.availability = availability;
    }

    public void addAvailability(LocalDateTime start, LocalDateTime end) {
        availableTimes++;
        availability[availableTimes].setStart(start);
        availability[availableTimes].setEnd(end);
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

class Availability {
    private LocalDateTime start;
    private LocalDateTime end;

    Availability() {

    }

    Availability(LocalDateTime start, LocalDateTime end) {
        setStart(start);
        setEnd(end);
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }
}
