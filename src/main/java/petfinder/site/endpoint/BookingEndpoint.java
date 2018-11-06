package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.booking.BookingDto;
import petfinder.site.common.booking.BookingService;

import java.util.Optional;

@RestController
@RequestMapping(value = "/booking")
public class BookingEndpoint {
    @Autowired
    BookingService bookingService;

    @GetMapping(value = "/{id}", produces = "application/json")
    @ResponseBody
    public Optional<BookingDto> getBooking(@PathVariable("id") Long id) {

        /*
        if (principal.equals(SecurityContextHolder.getContext().getAuthentication().getName())) {
            return bookingService.findBooking(id);
        }
        else {
            return Optional.empty();
        }
        */

        return bookingService.findBooking(id);
    }

    @PostMapping(value = "/add-booking", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public BookingDto saveBooking(@RequestBody BookingDto bookingDto) {
        bookingService.save(bookingDto);
        return bookingDto;
    }

}
