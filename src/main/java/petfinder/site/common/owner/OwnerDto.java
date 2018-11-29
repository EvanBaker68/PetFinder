package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import java.util.Date;


public class OwnerDto implements Momento<String> {

    private String principal;
    private int numPets;
    private double rating = 0.0;
    private int ratingCount = 0;
    private Boolean isDeleted = false;

    public OwnerDto() {
    }

    public OwnerDto(String principal, Long[] currentBookings, Long[] pastBookings, Long[] ids, int numPets, int rating) throws IllegalArgumentException{
        setPrincipal(principal);
        setNumPets(numPets);
        setRating(rating);
    }

    public OwnerDto(String principal, double rating) throws IllegalArgumentException {
        setPrincipal(principal);
        setRating(rating);
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) throws IllegalArgumentException {
        if(rating < 0){
            throw new IllegalArgumentException("setRating was given a negative");
        }
        this.rating = rating;
    }

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) throws IllegalArgumentException{

        isDeleted = deleted;
    }

    public String getPrincipal() {
        return principal;
    }

    public int getNumPets() { return numPets; }

    public void setNumPets(int numPets) throws IllegalArgumentException {
        if(numPets < 0){
            throw new IllegalArgumentException("setNumPets\t given a bad value");
        }
        this.numPets = numPets;
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
