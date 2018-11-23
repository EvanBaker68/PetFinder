package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.swing.text.StyledEditorKit;
import java.time.LocalDateTime;

public class SitterDto implements Momento<String> {

    private String principal;
    private Double rate;
    private Double rating;
    private int ratingCount;
    private Boolean isDeleted = false;


    //Main Constructor
    public SitterDto(String principal, Double rate) throws IllegalArgumentException {
        setPrincipal(principal);
        setRate(rate);
    }

    public SitterDto() {}

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }

    //Temporary until we get rid of Availability
    public SitterDto(String principal) throws IllegalArgumentException{
        setPrincipal(principal);
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

    public String getPrincipal() {
        return principal;
    }

    public Double getRate() { return rate; }

    public void setRate(double rate) throws IllegalArgumentException {
        if(rate < 0){
            throw new IllegalArgumentException("setRate\t given a negative value");
        }
        this.rate = rate; }

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

}

