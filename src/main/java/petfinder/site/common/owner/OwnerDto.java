package petfinder.site.common.owner;

public class OwnerDto {

    private String principle;
    private Long[] currentBookings;
    private Long[] pastBookings;


    public OwnerDto() {
    }

    public OwnerDto(String principle, Long[] currentBookings, Long[] pastBookings) {
        setPrinciple(principle);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }

    public String getPrinciple() {
        return principle;
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

    public void setPrinciple(String principle) {
        this.principle = principle;
    }
}
