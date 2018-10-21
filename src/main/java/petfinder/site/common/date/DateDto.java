package petfinder.site.common.date;

import alloy.util.Identifiable;

import java.util.Date;


public class DateDto implements Identifiable {

    private Long id;
    private Date startDate;
    private Date endDate;
    private String sitterPrinciple;
    private Boolean isDeleted;

    public DateDto(Date startDate, Date endDate, String sitterPrinciple) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.sitterPrinciple = sitterPrinciple;
    }

    public DateDto() {
        Long randomId = new Long(100);
        this.id = randomId;
    }


    @Override
    public Long getId() {
        return id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getSitterPrinciple() {
        return sitterPrinciple;
    }

    public void setSitterPrinciple(String sitterPrinciple) {
        this.sitterPrinciple = sitterPrinciple;
    }
}
