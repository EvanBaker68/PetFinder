package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;
import java.util.Map;

public class SitterDto {

    private Long sitterId;
    private Long[] currentBookings;
    private Long[] pastBookings;

    public SitterDto() {}

    public SitterDto(Long sitterId, Long[] currentBookings, Long[] pastBookings) {
        setSitterId(sitterId);
        setCurrentBookings(currentBookings);
        setPastBookings(pastBookings);
    }

    public Long getSitterId() {
        return sitterId;
    }

    public Long[] getCurrentBookings() {
        return currentBookings;
    }

    public Long[] getPastBookings() {
        return pastBookings;
    }

    public void setSitterId(Long sitterId) {
        this.sitterId = sitterId;
    }

    public void setCurrentBookings(Long[] currentBookings) {
        this.currentBookings = currentBookings;
    }

    public void setPastBookings(Long[] pastBookings) {
        this.pastBookings = pastBookings;
    }
}
