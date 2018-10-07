package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.booking.BookingDto;
import petfinder.site.common.booking.BookingService;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/booking")
public class BookingEndpoint {
    @Autowired
    BookingService bookingService;

    @GetMapping(value = "/{id}", produces = "application/json")
    @ResponseBody
    public Optional<BookingDto> getBooking(@PathVariable("id") Long id) {
        return bookingService.findBooking(id);
    }

    @PostMapping(value = "/add-booking", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public BookingDto saveBooking(@RequestBody BookingDto bookingDto) {
        bookingService.save(bookingDto);
        return bookingDto;
    }

}
