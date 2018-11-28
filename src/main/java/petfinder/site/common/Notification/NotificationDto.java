package petfinder.site.common.Notification;

import alloy.util.Identifiable;

import java.util.Random;

public class NotificationDto implements Identifiable {

    private Long id;
    private String sitterPrincipal;
    private String ownerPrincipal;
    private Boolean isDeleted;
    private String message;


    public NotificationDto(String sitterPrincipal, String ownerPrincipal, Boolean isDeleted, String message){
        this.sitterPrincipal = sitterPrincipal;
        this.ownerPrincipal = ownerPrincipal;
        this.isDeleted = isDeleted;
        this.message = message;
    }

    public NotificationDto() {
        Random randomno = new Random();

        Long randomId = randomno.nextLong();
        this.id = randomId;
    }

    public String getSitterPrincipal() {
        return sitterPrincipal;
    }

    public void setSitterPrincipal(String sitterPrincipal) {
        this.sitterPrincipal = sitterPrincipal;
    }

    public String getOwnerPrincipal() {
        return ownerPrincipal;
    }

    public void setOwnerPrincipal(String ownerPrincipal) {
        this.ownerPrincipal = ownerPrincipal;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public Long getMomento() {
        return id;
    }
}
