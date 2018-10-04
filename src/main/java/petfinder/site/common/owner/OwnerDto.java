package petfinder.site.common.owner;

import petfinder.site.common.booking.BookingDto;
import petfinder.site.common.pet.PetDto;

public class OwnerDto {
    private int ownerID;
    private int sitterID;
    private PetDto[] pets;
    //private BookingDto[] pastBookings;
    //private BookingDto[] currentBookings;

    public OwnerDto(int ownerID, int sitterID){
        this.ownerID = ownerID;
        this.sitterID = sitterID;
    }

    public int getOwnerID() {
        return ownerID;
    }

    public int getSitterID() {
        return sitterID;
    }

}
