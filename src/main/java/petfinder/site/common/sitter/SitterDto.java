package petfinder.site.common.sitter;

public class SitterDto {

    private String principle;
    private Long[] currentBookings;
    private Long[] pastBookings;

    public SitterDto() {}

    public SitterDto(String principle, Long[] currentBookings, Long[] pastBookings) {
        setPrinciple(principle);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }

    public Long[] getCurrentBookings() {
        return currentBookings;
    }

    public Long[] getPastBookings() {
        return pastBookings;
    }

    public String getPrinciple() {
        return principle;
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
