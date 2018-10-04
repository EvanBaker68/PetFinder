package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import java.util.Map;

public class OwnerDto implements Momento<String> {
    private String principle;
    //do we need to make a seperate principle for sitters, instead of just using User's principle
    private Map<String, Object> attributes;
    private long currentBookingId;
    private long[] futureBookingIds;
    private long[] pastBookingIds;


    OwnerDto() {

    }

    OwnerDto(String principle, Map<String, Object> attributes, long currentBookingId, long[] futureBookingIds, long[] pastBookingIds){
        setPrinciple(principle);
        setAttributes(attributes);
        setCurrentBookingId(currentBookingId);
        setFutureBookingIds(futureBookingIds);
        setPastBookingIds(pastBookingIds);
    }

    @JsonIgnore
    @Override
    public String getMomento() {
        return null;
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

    public long[] getFutureBookingIds() {
        return futureBookingIds;
    }

    public void setFutureBookingIds(long[] futureBookingIds) {
        this.futureBookingIds = futureBookingIds;
    }

    public long[] getPastBookingIds() {
        return pastBookingIds;
    }

    public void setPastBookingIds(long[] pastBookingIds) {
        this.pastBookingIds = pastBookingIds;
    }
}
