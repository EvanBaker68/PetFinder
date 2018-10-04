package petfinder.site.common.booking;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;
import java.util.Date;
public class BookingDto implements Momento<Long> {
    private Long id;
    private String sitterPrinciple; //can possibly be array
    private String ownerPrinciple;  //can possibly be array
    private Date startDate;
    private Date finishDate;
    private String reviewByOwner;
    private Integer scoreByOwner;
    private String reviewBySitter;
    private Integer scoreBySitter;


    public BookingDto() {

    }

    public BookingDto(Long id, String sitterPrinciple, String ownerPrinciple, Date startDate, Date finishDate, String reviewByOwner, String reviewBySitter, Integer scoreByOwner, Integer scoreBySitter) {
        setId(id);
        setOwnerPrinciple(ownerPrinciple);
        setSitterPrinciple(sitterPrinciple);
        setFinishDate(finishDate);
        setStartDate(startDate);
        setReviewByOwner(reviewByOwner);
        setReviewBySitter(reviewBySitter);
        setScoreByOwner(scoreByOwner);
        setScoreBySitter(scoreBySitter);
    }

    public BookingDto(Long id, String sitterPrinciple, String ownerPrinciple, Date startDate, Date finishDate){
        setId(id);
        setOwnerPrinciple(ownerPrinciple);
        setSitterPrinciple(sitterPrinciple);
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
        return id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSitterPrinciple() {
        return sitterPrinciple;
    }

    public void setSitterPrinciple(String sitterPrinciple) {
        this.sitterPrinciple = sitterPrinciple;
    }

    public String getOwnerPrinciple() {
        return ownerPrinciple;
    }

    public void setOwnerPrinciple(String ownerPrinciple) {
        this.ownerPrinciple = ownerPrinciple;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public String getReviewByOwner() {
        return reviewByOwner;
    }

    public Integer getScoreByOwner() {
        return scoreByOwner;
    }

    public String getReviewBySitter() {
        return reviewBySitter;
    }

    //IF given empty string then has not been established yet
    public void setReviewBySitter(String reviewBySitter) {
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
