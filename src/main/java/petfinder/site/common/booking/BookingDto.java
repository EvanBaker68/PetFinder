package petfinder.site.common.booking;

import java.time.LocalDateTime;

public class BookingDto {
    private int ownerID;
    private int sitterID;

    LocalDateTime startDateTime;
    LocalDateTime endDateTime;

    //array of petID's

    public BookingDto(int ownerID, int sitterID, LocalDateTime startDateTime, LocalDateTime endDateTime) {
        this.ownerID = ownerID;
        this.sitterID = sitterID;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
    }

    public int getOwnerID() {
        return ownerID;
    }

    public int getSitterID() {
        return sitterID;
    }

    public LocalDateTime getStartDateTime() {
        return startDateTime;
    }

    public LocalDateTime getEndDateTime() {
        return endDateTime;
    }


}
