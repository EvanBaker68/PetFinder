package petfinder.site.common.date;

import alloy.util.Identifiable;
import java.util.Date;
import java.time.LocalDate;
public class DateDto implements Identifiable {
    private Long id;
    private Date date;
    private LocalDate startTime;
    private LocalDate endTime;
    private String sitterPrinciple;

    public DateDto(Long id, Date date, LocalDate startTime, LocalDate endTime, String sitterPrinciple) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.sitterPrinciple = sitterPrinciple;
    }

    public DateDto() {}


    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }

    public String getSitterPrinciple() {
        return sitterPrinciple;
    }

    public void setSitterPrinciple(String sitterPrinciple) {
        this.sitterPrinciple = sitterPrinciple;
    }
}
