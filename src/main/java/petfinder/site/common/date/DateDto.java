package petfinder.site.common.date;

import alloy.util.Identifiable;


public class DateDto implements Identifiable {
    private Long id;
    private String startDate;
    private String endDate;
    private String sitterPrinciple;

    public DateDto(String startDate, String endDate, String sitterPrinciple) {
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

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getSitterPrinciple() {
        return sitterPrinciple;
    }

    public void setSitterPrinciple(String sitterPrinciple) {
        this.sitterPrinciple = sitterPrinciple;
    }
}
