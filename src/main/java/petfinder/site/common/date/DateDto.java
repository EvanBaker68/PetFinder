package petfinder.site.common.date;

import alloy.util.Identifiable;
import petfinder.site.ValidationException;


public class DateDto implements Identifiable {
    private Long id;
    private String startDate;
    private String endDate;
    private String sitterPrinciple;

    /*public DateDto(String startDate, String endDate, String sitterPrinciple) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.sitterPrinciple = sitterPrinciple;
    }*/

    public DateDto(String startDate, String endDate, String sitterPrinciple) throws ValidationException {
        setSitterPrinciple(sitterPrinciple);
        setEndDate(endDate);
        setStartDate(startDate);
    }


    public DateDto() throws ValidationException {
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

    public void setStartDate(String startDate) throws ValidationException {
        if (startDate == null) {
            throw new ValidationException("setStartDate", "given a null");
        }
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) throws ValidationException {
        if (endDate == null) {
            throw new ValidationException("setEndDate", "given a null");
        }
        this.endDate = endDate;
    }

    public String getSitterPrinciple() {
        return sitterPrinciple;
    }

    public void setSitterPrinciple(String sitterPrinciple) throws ValidationException {
        if (sitterPrinciple == null) {
            throw new ValidationException("setSitterPrinciple", "given a null");
        } else if (!sitterPrinciple.matches(".+\\@.+\\..+")) {
            throw new ValidationException("setSitterPrinciple", "given a bad value");
        }
        this.sitterPrinciple = sitterPrinciple;
    }

    public void setId(Long id) throws ValidationException {
        if (id == null) {
            throw new ValidationException("setId", "given a null");
        } else if (id <= 0) {
            throw new ValidationException("setId", "given a invalid Function");
        }
    }
}
