package petfinder.site.common.date;

import alloy.util.Identifiable;
import jdk.nashorn.internal.runtime.regexp.joni.exception.ValueException;
import org.apache.tomcat.jni.Local;
//import petfinder.site.ValidationException;

import java.util.Date;
import java.time.LocalDate;

public class DateDto implements Identifiable {

    private Long id;
    private String startDate;
    private String endDate;
    private String sitterPrinciple;
    private Boolean isDeleted;

    public DateDto(String startDate, String endDate, String sitterPrinciple) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.sitterPrinciple = sitterPrinciple;
    }

    public DateDto(Long id, String startDate, String endDate, String sitterPrinciple) throws IllegalArgumentException {
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

    public void setId(Long id) throws IllegalArgumentException{
        if(id <= 0){
            throw new IllegalArgumentException("setID\n id was less than or equal to 0");
        }
        this.id = id;
    }
    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) throws IllegalArgumentException {
        if (startDate == null) {
            throw new IllegalArgumentException("setStartDate\n was set to null");
        }
        this.startDate = startDate;
    }


    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate){
        this.endDate = endDate;
    }
    public String getSitterPrinciple(){
        String temp = this.sitterPrinciple;
        return temp;
    }

    public void setSitterPrinciple(String sitterPrinciple) throws IllegalArgumentException{
        if(sitterPrinciple == null){
            throw new IllegalArgumentException("setSitterProfile\n was given a null value");
        } else if(!sitterPrinciple.matches("^(.+)@(.+)$")) {
            throw new IllegalArgumentException("setSitterProfile\n was not given a regex value");
        }
        this.sitterPrinciple = sitterPrinciple;
    }
}
