package petfinder.site.common.user;

public class OwnerDto {

    private Long ownerId;
    private Long[] currentBookings;
    private Long[] pastBookings;


    public OwnerDto() {
    }

    public OwnerDto(Long ownerId, Long[] currentBookings, Long[] pastBookings) {
        setOwnerId(ownerId);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public Long[] getCurrentBookings() {
        return currentBookings;
    }

    public Long[] getPastBookings() {
        return pastBookings;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public void setCurrentBookings(Long[] currentBookings) {
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(Long[] pastBookings) {
        this.pastBookings = pastBookings;
    }
}
