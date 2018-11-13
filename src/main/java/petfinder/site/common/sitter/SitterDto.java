package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.swing.text.StyledEditorKit;
import java.time.LocalDateTime;

public class SitterDto implements Momento<String> {

    private String principal;
    private Long[] currentBookings;
    private Long[] pastBookings;
    private Long[] pendingBookings;
    private Long[] datesAvailable;
    private Double rate;
    private Boolean isDeleted = false;


    //Main Constructor
    public SitterDto(String principal, Double rate) throws IllegalArgumentException {
        setPrincipal(principal);
        setRate(rate);
    }

    public SitterDto() {}

    public SitterDto(String principal) throws IllegalArgumentException {
        setPrincipal(principal);
    }

    //Temporary until we get rid of Availability
    public SitterDto(String principal, Long[] currentBookings, Long[] pastBookings) throws IllegalArgumentException{
        setPrincipal(principal);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }


    public Long[] getPendingBookings() { return pendingBookings; }

    public void setPendingBookings(Long[] pendingBookings) throws IllegalArgumentException{
        if(pendingBookings == null){
            throw new IllegalArgumentException("setPendingBookings\t was given a null");
        } else{
            for(Long i : pendingBookings){
                if(i < 0L){
                    throw new IllegalArgumentException("setPendingBookings\t given a bad booking");
                }
            }
        }
        this.pendingBookings = pendingBookings;
    }

    public void setRate(Double rate) throws IllegalArgumentException{
        if(rate == null){
            throw new IllegalArgumentException("setRate\t given a null");
        }else if(rate < 0){
            throw new IllegalArgumentException("setRate\t given a bad value");
        }
        this.rate = rate;
    }

    public Boolean getDeleted() { return isDeleted; }

    public void setDeleted(Boolean deleted) throws IllegalArgumentException {
        if(deleted == null){
            throw new IllegalArgumentException("setDeleted\t was given a null");
        }
        isDeleted = deleted;
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

    public void setRate(double rate) throws IllegalArgumentException {
        if(rate < 0){
            throw new IllegalArgumentException("setRate\t given a negative value");
        }
        this.rate = rate; }

    public void setCurrentBookings(Long[] currentBookings)throws IllegalArgumentException {
        if(currentBookings == null) {
            throw new IllegalArgumentException("setCurrentBookings\t was given a null");
        }else{
            for(Long i : currentBookings){
                if(i < 0L){
                    throw new IllegalArgumentException("setCurrentBookings\t was given a null");
                }
            }
        }
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(Long[] pastBookings) throws IllegalArgumentException{
        if(pastBookings == null){
            throw new IllegalArgumentException("setPastBookings\t was given a null");
        }else {
            for(Long j : pastBookings) {
                if (j < 0L) {
                    throw new IllegalArgumentException("setPastBookings\t was given a bad val");
                }
            }
        }
        this.pastBookings = pastBookings;
    }

    public void setPrincipal(String principal) throws IllegalArgumentException {
        if(principal == null){
            throw new IllegalArgumentException("setPrincipal\t was given a null");
        }
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

    public void setDatesAvailable(Long[] datesAvailable) throws IllegalArgumentException{
        if(datesAvailable == null){
            throw new IllegalArgumentException("setDatesAvailable\t was given a null");
        }
        this.datesAvailable = datesAvailable;
    }
}

