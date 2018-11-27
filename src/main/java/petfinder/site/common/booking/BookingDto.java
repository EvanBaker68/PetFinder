package petfinder.site.common.booking;

import alloy.util.Identifiable;
import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;
import java.util.Date;
import java.util.Random;

public class BookingDto implements Identifiable{
    private Long id;
    private String sitterPrincipal; //can possibly be array
    private String ownerPrincipal;  //can possibly be array
    private Date startDate;
    private Date finishDate;
    private String reviewByOwner;
    private Integer scoreByOwner;
    private String reviewBySitter;
    private Integer scoreBySitter;
    private Boolean isDeleted = false;
    private Boolean isRatedByOwner = false;
    private Boolean isRatedBySitter = false;
    private Boolean isReviewedByOwner = false;
    private Boolean isReviewedBySitter = false;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public BookingDto() {
        Random randomno = new Random();

        Long randomId = randomno.nextLong();
        this.id = randomId;
    }

    public BookingDto(Long id, String sitterPrincipal, String ownerPrincipal, Date startDate, Date finishDate, String reviewByOwner, String reviewBySitter, Integer scoreByOwner, Integer scoreBySitter) {
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

    public BookingDto(Long id, String sitterPrincipal, String ownerPrincipal, Date startDate, Date finishDate){
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
    public Long getId() {
        return id;
    }

    public Boolean getRatedByOwner() { return isRatedByOwner; }

    public void setRatedByOwner(Boolean ratedByOwner) { isRatedByOwner = ratedByOwner; }

    public Boolean getRatedBySitter() { return isRatedBySitter; }

    public void setRatedBySitter(Boolean ratedBySitter) { isRatedBySitter = ratedBySitter; }

    public Boolean getReviewedByOwner() { return isReviewedByOwner; }

    public void setReviewedByOwner(Boolean reviewedByOwner) { isReviewedByOwner = reviewedByOwner; }

    public Boolean getReviewedBySitter() { return isReviewedBySitter; }

    public void setReviewedBySitter(Boolean reviewedBySitter) { isReviewedBySitter = reviewedBySitter; }

    public Boolean getDeleted() { return isDeleted; }

    public void setDeleted(Boolean deleted) { isDeleted = deleted; }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSitterPrincipal() {
        return sitterPrincipal;
    }

    public void setSitterPrincipal(String sitterPrincipal) {
        this.sitterPrincipal = sitterPrincipal;
    }

    public String getOwnerPrincipal() {
        return ownerPrincipal;
    }

    public void setOwnerPrincipal(String ownerPrincipal) {
        this.ownerPrincipal = ownerPrincipal;
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
