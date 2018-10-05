package petfinder.site.common.booking;

import org.springframework.beans.factory.annotation.Autowired;
import petfinder.site.common.pet.PetDto;

import java.util.Optional;

public class BookingService {
    @Autowired
    BookingDao bookingDao;

    public Optional<BookingDto> findBooking(Long id) {
        return bookingDao.findBooking(id);
    }


    public void save(BookingDto bookingDto) {
        bookingDao.save(bookingDto);
    }
}
