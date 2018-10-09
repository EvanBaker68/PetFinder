package petfinder.site.common.date;

import alloy.util.Identifiable;
import jdk.nashorn.internal.runtime.regexp.joni.exception.ValueException;
import org.apache.tomcat.jni.Local;
import petfinder.site.ValidationException;

import java.util.Date;
import java.time.LocalDate;
public class DateDto implements Identifiable {
    private Long id;
    private Date date;
    private LocalDate startTime;
    private LocalDate endTime;
    private String sitterPrinciple;

    public DateDto(Long id, Date date, LocalDate startTime, LocalDate endTime, String sitterPrinciple) throws ValidationException {
       /* this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.sitterPrinciple = sitterPrinciple;*/
       if(startTime.isAfter(endTime)){
           throw new ValidationException("DateDto", "startTime was set to after endTime");
       }
       setDate(date);
       setId(id);
       setSitterPrinciple(sitterPrinciple);
       setStartTime(startTime);
       setEndTime(endTime);
    }

    public DateDto() {}


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

    public Date getDate() {
        Date temp = date;
        return temp;
    }

    public void setDate(Date date) throws ValidationException{
        if(date == null){
            throw new ValidationException("setDate", "setDate was given null");
        } else if (date.before(new Date())){
            throw new ValidationException("setDate", "was given a date that is not valid");
        }
        this.date = date;
    }

    public LocalDate getStartTime() {
        LocalDate temp = startTime;
        return temp;
    }

    public void setStartTime(LocalDate startTime) throws ValidationException{
        if(startTime == null){
            throw new ValidationException("setStartTime", "was given a null value");
        }

        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        LocalDate temp = endTime;
        return temp;
    }

    public void setEndTime(LocalDate endTime) throws ValidationException{
        if(endTime == null){
            throw new ValidationException("setEndTime", "was given a null value");
        }
        this.endTime = endTime;
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
