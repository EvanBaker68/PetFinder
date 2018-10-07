package petfinder.site.common.owner;

import alloy.util.Momento;
import org.codehaus.jackson.annotate.JsonIgnore;

import java.util.Map;

public class OwnerDto implements Momento<String> {
    private String principle;
    //do we need to make a seperate principle for sitters, instead of just using User's principle
    private Map<String, Object> attributes;
    private Long currentBookingId;
    private Long[] futureBookingIds;
    private Long[] pastBookingIds;

    private Long[] petIds;


    OwnerDto() {
    }

    OwnerDto(String principle, Map<String, Object> attributes, Long currentBookingId, Long[] futureBookingIds, Long[] pastBookingIds, Long[] petIds){
        setPrinciple(principle);
        setAttributes(attributes);
        setCurrentBookingId(currentBookingId);
        setFutureBookingIds(futureBookingIds);
        setPastBookingIds(pastBookingIds);
        setPetIds(petIds);
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

    public Long getCurrentBookingId() {
        return currentBookingId;
    }

    public void setCurrentBookingId(Long currentBookingId) {
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

    public Long[] getPetIds() {
        return petIds;
    }

    public void setPetIds(Long[] petIds) {
        this.petIds = petIds;
    }
}
