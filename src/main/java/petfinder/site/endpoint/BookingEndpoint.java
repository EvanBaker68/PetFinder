package petfinder.site.endpoint;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.booking.BookingDto;
import petfinder.site.common.booking.BookingService;
import petfinder.site.common.pet.PetDto;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/booking")
public class BookingEndpoint {
    @Autowired
    BookingService bookingService;

    @GetMapping(value = "/{id}", produces = "application/json")
    public Optional<BookingDto> getBooking(@PathVariable("id") Long id) {
        return bookingService.findBooking(id);
    }

    @PostMapping(produces = "application/json")
    public BookingDto saveBooking(@RequestBody BookingDto bookingDto) {
        //Logger log = (Logger) LoggerFactory.getLogger(getClass());
        //log.info("heyyo");
        bookingService.save(bookingDto);
        return bookingDto;
    }

}
