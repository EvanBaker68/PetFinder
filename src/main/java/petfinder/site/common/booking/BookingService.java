package petfinder.site.common.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.pet.PetDto;
import petfinder.site.common.sitter.SitterDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    BookingDao bookingDao;

    public BookingDto findBooking(Long id) {
        Optional<BookingDto> dummy = bookingDao.findBooking(id);
        return dummy.get();
    }

    public List<Optional<BookingDto>> findBookingsBySitterPrincipal(String sitterPrincipal) {
        List<Optional<BookingDto>> theList =  bookingDao.findBookingBySitterPrincipal(sitterPrincipal);
        List<Optional<BookingDto>> newList = new ArrayList<>();
        for(Optional<BookingDto> booking : theList){
            if(!booking.get().getDeleted()){
                System.out.println(booking.get().getSitterPrincipal());
                newList.add(booking);
            }
        }

        return newList;
    }

    public List<Optional<BookingDto>> findBookingsByOwnerPrincipal(String ownerPrincipal) {
        List<Optional<BookingDto>> theList =  bookingDao.findBookingByOwnerPrincipal(ownerPrincipal);
        List<Optional<BookingDto>> newList = new ArrayList<>();
        for(Optional<BookingDto> booking : theList){
            if(!booking.get().getDeleted()){
                newList.add(booking);
            }
        }

        return newList;
    }

    public void save(BookingDto bookingDto) {
        bookingDao.save(bookingDto);
    }
}
