package petfinder.site.test.junit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import petfinder.site.common.booking.BookingDto;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

public class BookingTest {
    @Test
    @DisplayName("Testing the Swag of a Booking")
    public void testingBooking(){
        BookingDto bookingDto;
        long id = 1234L;
        String sitterPrincipal = "drewb97@gmail.com";
        String ownerPrincipal = "andrew_bury@baylor.edu";
        Date startDate = new Date();
        Date endDate = new Date();
        bookingDto = new BookingDto(id, sitterPrincipal, ownerPrincipal, startDate, endDate);
        assertAll(
                ()-> assertNotNull(bookingDto.getId()),
                ()-> assertNotNull(bookingDto.getOwnerPrincipal()),
                ()-> assertNotNull(bookingDto.getSitterPrincipal()),
                ()-> assertNotNull(bookingDto.getFinishDate()),
                ()-> assertNotNull(bookingDto.getStartDate()),
                ()-> assertEquals((long)id, (long)bookingDto.getId()),
                ()-> assertEquals(sitterPrincipal, bookingDto.getSitterPrincipal()),
                ()-> assertEquals(ownerPrincipal, bookingDto.getOwnerPrincipal())
        );

    }
}
