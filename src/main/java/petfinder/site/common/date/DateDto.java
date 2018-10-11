package petfinder.site.common.date;

import alloy.util.Identifiable;
import petfinder.site.ValidationException;
import java.util.Date;
public class DateDto implements Identifiable {
    private Long id;
    private String startDate;
    private String endDate;
    private String sitterPrinciple;

    public DateDto(String startDate, String endDate, String sitterPrinciple) throws ValidationException {
        setStartDate(startDate);
        setEndDate(endDate);
        setSitterPrinciple(sitterPrinciple);
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

    public void setStartDate(String startDate) throws ValidationException {
        if(startDate == null){
            throw new ValidationException("setStartDate", "given a null value");

        }
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) throws ValidationException {
        if(endDate == null){
            throw new ValidationException("setEndDate", " was set to null");

        }        this.endDate = endDate;
    }

    public String getSitterPrinciple() {
        return sitterPrinciple;
    }

    public void setSitterPrinciple(String sitterPrinciple) throws ValidationException{
        if(sitterPrinciple == null){
            throw new ValidationException("setSitterPrinciple", " set to null");
        } else if(!sitterPrinciple.matches(".+\\@.+\\..+")){
            throw new ValidationException("setSitterPrinciple", "did not match email regex");
        }

        this.sitterPrinciple = sitterPrinciple;
    }
}
