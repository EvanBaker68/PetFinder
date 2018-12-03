package petfinder.site.common.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingService {
    @Autowired
    BookingDao bookingDao;

    public BookingDto findBooking(Long id) {
        Optional<BookingDto> bookingDto = bookingDao.findBooking(id);
        if(bookingDto.isPresent()){
            return bookingDto.get();
        }
        return null;
    }

    public List<BookingDto> findBookingsBySitterPrincipal(String sitterPrincipal) {
        List<Optional<BookingDto>> theList =  bookingDao.findBookingBySitterPrincipal(sitterPrincipal);

        List<BookingDto> newList = theList.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());

        return newList;
    }

    public List<BookingDto> findBookingsByOwnerPrincipal(String ownerPrincipal) {
        List<Optional<BookingDto>> theList =  bookingDao.findBookingByOwnerPrincipal(ownerPrincipal);

        List<BookingDto> newList = theList.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());

        return newList;
    }

    public void save(BookingDto bookingDto) {
        bookingDao.save(bookingDto);
    }
}
