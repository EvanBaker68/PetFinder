package petfinder.site.common.sitter;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import java.util.Map;

public class SitterDto implements Momento<String> {
    private String principle;
    //do we need to make a seperate principle for sitters, instead of just using User's principle
    private Map<String, Object> attributes;
    private Long currentBookingId;
    private Long[] futureBookingIds;
    private Long[] pastBookingIds;

    public SitterDto() {}


    public SitterDto(String principle, Map<String, Object> attributes, Long currentBookingId, Long[] futureBookingIds, Long[] pastBookingIds){
        setPrinciple(principle);
        setAttributes(attributes);
        setCurrentBookingId(currentBookingId);
        setFutureBookingIds(futureBookingIds);
        setPastBookingIds(pastBookingIds);
    }



    public String getPrinciple() {
        return principle;
    }

    public void setPrinciple(String principle) {
        this.principle = principle;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public long getCurrentBookingId() {
        return currentBookingId;
    }

    public void setCurrentBookingId(long currentBookingId) {
        this.currentBookingId = currentBookingId;
    }

    public Long[] getFutureBookingIds() {
        return futureBookingIds;
    }

    public void setFutureBookingIds(Long[] futureBookingIds) {
        this.futureBookingIds = futureBookingIds;
    }

    public Long[] getPastBookingIds() {
        return pastBookingIds;
    }

    public void setPastBookingIds(Long[] pastBookingIds) {
        this.pastBookingIds = pastBookingIds;
    }

    @JsonIgnore
    @Override
    public String getMomento() {
        return principle;
    }
}
