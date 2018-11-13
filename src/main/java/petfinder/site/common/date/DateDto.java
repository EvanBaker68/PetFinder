package petfinder.site.common.date;

import alloy.util.Identifiable;

import java.util.Date;
import java.util.Random;


public class DateDto implements Identifiable {

    private Long id;
    private Date startDate;
    private Date endDate;
    private String sitterPrincipal;
    private Boolean isDeleted = false;

    public void setId(Long id) { this.id = id; }

    public Boolean getDeleted() { return isDeleted; }

    public void setDeleted(Boolean deleted) { isDeleted = deleted; }



    public DateDto(Date startDate, Date endDate, String sitterPrincipal)throws IllegalArgumentException{
        this.startDate = startDate;
        this.endDate = endDate;
        this.sitterPrincipal = sitterPrincipal;
    }

    public DateDto() {
        Random randomno = new Random();

        Long randomId = randomno.nextLong();
        this.id = randomId;
    }


    @Override
    public Long getId() {
        return id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) throws IllegalArgumentException {
        if(startDate == null){
            throw new IllegalArgumentException("setStartDate\t given a null");
        }
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate)throws IllegalArgumentException{
        if(endDate == null){
            throw new IllegalArgumentException("setEndDate\t given a null");
        }
        this.endDate = endDate;
    }

    public String getSitterPrincipal() {
        return sitterPrincipal;
    }

    public void setSitterPrincipal(String sitterPrincipal)throws IllegalArgumentException{
        if(sitterPrincipal == null){
            throw new IllegalArgumentException("setSitterPrincipal\t was given a null");
        } else if(!sitterPrincipal.matches("^(.+)@(.+)$")){
            throw new IllegalArgumentException("setSitterPrincipal\t was given a bad value");
        }
        this.sitterPrincipal = sitterPrincipal;
    }
}
