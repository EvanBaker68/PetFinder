package petfinder.site.common.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.pet.PetDto;

import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    BookingDao bookingDao;

    public BookingDto findBooking(Long id) {
        Optional<BookingDto> dummy = bookingDao.findBooking(id);
        return dummy.get();
    }


    public void save(BookingDto bookingDto) {
        bookingDao.save(bookingDto);
    }
}
