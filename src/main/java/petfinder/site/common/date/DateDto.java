package petfinder.site.common.date;

import alloy.util.Identifiable;
import jdk.nashorn.internal.runtime.regexp.joni.exception.ValueException;
import org.apache.tomcat.jni.Local;
import petfinder.site.ValidationException;

import java.util.Date;
import java.time.LocalDate;
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

    public DateDto(Long id, String startDate, String endDate, String sitterPrinciple) throws ValidationException {
        setId(id);
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
        Long temp = id;
        return temp;
    }

    public void setId(Long id) throws ValidationException {
        if(id <= 0){
            throw new ValidationException("setID", "id was less than or equal to 0");
        }
        this.id = id;
    }
    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) throws ValidationException{
        if(startDate == null){
            throw new ValidationException("setStartDate", "was set to null");
        }
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) throws ValidationException {
        if(endDate == null){
            throw new ValidationException("setEndDate", "was set to null");
        }
        this.endDate = endDate;
    }

    public String getSitterPrinciple() {
        String temp = sitterPrinciple;
        return temp;
    }

    public void setSitterPrinciple(String sitterPrinciple) throws ValidationException {
        if(sitterPrinciple == null){
            throw new ValidationException("setSitterProfile", "was given a null value");
        } else if(!sitterPrinciple.matches("^(.+)@(.+)$")) {
            throw new ValidationException("setSitterProfile", "was not given a regex value");
        }
        this.sitterPrinciple = sitterPrinciple;
    }
}
