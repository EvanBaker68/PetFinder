package petfinder.site.common.sitter;

import alloy.util.Momento;

/**
 * Katy Atchison 10/4
 */
public class SitterDto implements Momento<Integer> {
    private int sitterID;
    private int ownerID;
    //current bookings
    //past bookings

    public int getSitterID() {
        return sitterID;
    }

    public int getOwnerID() {
        return ownerID;
    }

    public Integer getMomento() {
        return sitterID;
    }
}
