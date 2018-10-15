package petfinder.site.common.date;

import alloy.util.Identifiable;

import java.util.Date;

public class DateDto implements Identifiable {

    private Long id;
    private String startDate;
    private String endDate;
    private String sitterPrinciple;
    private Boolean isDeleted;

    /*public DateDto(String startDate, String endDate, String sitterPrinciple) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.sitterPrinciple = sitterPrinciple;
    }*/

    public DateDto(String startDate, String endDate, String sitterPrinciple) throws IllegalArgumentException {
        setSitterPrinciple(sitterPrinciple);
        setEndDate(endDate);
        setStartDate(startDate);
    }


    public DateDto() throws IllegalArgumentException {
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

    public void setStartDate(String startDate) throws IllegalArgumentException {
        if(startDate == null){
            throw new IllegalArgumentException("setStartDate given a null value");
        }
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) throws IllegalArgumentException {
        if (endDate == null) {
            throw new IllegalArgumentException("setEndDate given a null");
        }
        this.endDate = endDate;
    }

    public String getSitterPrinciple() {
        return sitterPrinciple;
    }

    public void setSitterPrinciple(String sitterPrinciple) throws IllegalArgumentException {
        if (sitterPrinciple == null) {
            throw new IllegalArgumentException("setSitterPrinciple given a null");
        } else if (!sitterPrinciple.matches(".+\\@.+\\..+")) {
            throw new IllegalArgumentException("setSitterPrinciple given a bad value");
        }
        this.sitterPrinciple = sitterPrinciple;
    }

    public void setId(Long id) throws IllegalArgumentException {
        if (id == null) {
            throw new IllegalArgumentException("setId given a null");
        } else if (id <= 0) {
            throw new IllegalArgumentException("setId given a invalid Function");
        }
        this.id = id;
    }
}
