package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;
import java.util.Map;

public class SitterDto {

    private Long[] currentBookings;
    private Long[] pastBookings;

    public SitterDto() {}

    public SitterDto(Long[] currentBookings, Long[] pastBookings) {
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
