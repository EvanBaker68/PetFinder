package petfinder.site.common.booking;

import alloy.util.Identifiable;
import alloy.util.Momento;
import jdk.nashorn.internal.runtime.regexp.joni.exception.ValueException;
import org.codehaus.jackson.annotate.JsonIgnore;
import petfinder.site.common.date.DateDto;
//import petfinder.site.ValidationException;

import java.util.Date;
public class BookingDto implements Identifiable{
    private Long id;
    private String sitterPrincipal; //can possibly be array
    private String ownerPrincipal;  //can possibly be array
    private DateDto startDate;
    private DateDto finishDate;
    private String reviewByOwner;
    private Integer scoreByOwner;
    private String reviewBySitter;
    private Integer scoreBySitter;


    public BookingDto() {

    }

    public BookingDto(Long id, String sitterPrincipal, String ownerPrincipal, DateDto startDate, DateDto finishDate, String reviewByOwner, String reviewBySitter, Integer scoreByOwner, Integer scoreBySitter) throws IllegalArgumentException{
        setId(id);
        setOwnerPrincipal(ownerPrincipal);
        setSitterPrincipal(sitterPrincipal);
        setFinishDate(finishDate);
        setStartDate(startDate);
        setReviewByOwner(reviewByOwner);
        setReviewBySitter(reviewBySitter);
        setScoreByOwner(scoreByOwner);
        setScoreBySitter(scoreBySitter);
    }

    public BookingDto(Long id, String sitterPrincipal, String ownerPrincipal, DateDto startDate, DateDto finishDate) throws IllegalArgumentException{
        setId(id);
        setOwnerPrincipal(ownerPrincipal);
        setSitterPrincipal(sitterPrincipal);
        setFinishDate(finishDate);
        setStartDate(startDate);

        //Giving these key indicator values to show they have not been established yet
        setReviewByOwner("");
        setReviewBySitter("");
        setScoreByOwner(-1);
        setScoreBySitter(-1);
    }

    @JsonIgnore
    @Override

    public Long getMomento() {
        Long temp = id;
        return temp;
    }

    public Long getId() {
        Long temp = id;
        return temp;
    }

    public void setId(Long id) throws IllegalArgumentException{
        if(id == null){
            throw new IllegalArgumentException("setId\n was given a null value");
        }else if (id <= 0){
            throw new IllegalArgumentException("setId\n was given a bad value for id");
        }
        this.id = id;
    }

    public String getSitterPrincipal() {
        String temp = sitterPrincipal;
        return temp;
    }

    public void setSitterPrincipal(String sitterPrincipal) throws IllegalArgumentException{
        if(sitterPrincipal == null){
            throw new IllegalArgumentException("setSitterPrincipal\n was given a null value");
        } else if(!sitterPrincipal.matches("^(.+)@(.+)$")){
            throw new IllegalArgumentException("setSitterPrincipal\n was given an invalid value");
        }
        this.sitterPrincipal = sitterPrincipal;
    }

    public String getOwnerPrincipal() {
        String temp = ownerPrincipal;
        return temp;
    }

    public void setOwnerPrincipal(String ownerPrincipal) throws IllegalArgumentException{
        if(ownerPrincipal == null){
            throw new IllegalArgumentException("setOwnerPrincipal\n was given a null value");
        } else if(!ownerPrincipal.matches("^(.+)@(.+)$")){
            throw new IllegalArgumentException("setOwnerPrincipal\n was given an invalid value");
        }
        this.ownerPrincipal = ownerPrincipal;
    }

    public DateDto getStartDate() {
        DateDto temp = startDate;
        return temp;
    }


    //MIGHT CHANGE THESE BECAUSE OF NEW DATE OBJECT
    public void setStartDate(DateDto startDate) throws IllegalArgumentException{
        if(startDate == null){
            throw new IllegalArgumentException("setStartDate\n was given a null");
        }
        this.startDate = startDate;
    }

    public DateDto getFinishDate() {
        DateDto temp = finishDate;
        return temp;
    }

    public void setFinishDate(DateDto finishDate) throws IllegalArgumentException {
        if(finishDate == null){
            throw new IllegalArgumentException("setFinishDate\n finishDate was set to null");
        }
        this.finishDate = finishDate;
    }

    public String getReviewByOwner() {
        String temp = reviewByOwner;
        return temp;
    }

    public Integer getScoreByOwner() {
        Integer temp = scoreByOwner;
        return temp;
    }

    public String getReviewBySitter() {
        String temp = reviewBySitter;
        return temp;
    }

    //IF given empty string then has not been established yet
    public void setReviewBySitter(String reviewBySitter) throws IllegalArgumentException{
        this.reviewBySitter = reviewBySitter;
    }

    public Integer getScoreBySitter() {
        return scoreBySitter;
    }

    //IF given empty string then has not been established yet
    public void setReviewByOwner(String reviewByOwner) {
        this.reviewByOwner = reviewByOwner;
    }

    //IF Given -1 then score not given yet
    //Range of scores is 1-5 inclusive
    public void setScoreByOwner(Integer scoreByOwner) {
        this.scoreByOwner = scoreByOwner;
    }

    //IF Given -1 then score not given yet
    //Range of scores is 1-5 inclusive
    public void setScoreBySitter(Integer scoreBySitter) {
        this.scoreBySitter = scoreBySitter;
    }
}
