package petfinder.site.common.owner;

public class OwnerDto {


    private Long[] currentBookings;
    private Long[] pastBookings;


    public OwnerDto() {
    }

    public OwnerDto(Long[] currentBookings, Long[] pastBookings) {
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }



    public Long[] getCurrentBookings() {
        return currentBookings;
    }

    public Long[] getPastBookings() {
        return pastBookings;
    }

    public void setCurrentBookings(Long[] currentBookings) {
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(Long[] pastBookings) {
        this.pastBookings = pastBookings;
    }
}
