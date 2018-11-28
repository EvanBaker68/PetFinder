package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.booking.BookingDto;
import petfinder.site.common.booking.BookingService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/booking")
public class BookingEndpoint {
    @Autowired
    BookingService bookingService;

    @GetMapping(value = "/{id}", produces = "application/json")
    @ResponseBody
    public BookingDto getBooking(@PathVariable("id") Long id) {
        return bookingService.findBooking(id);
    }

    @GetMapping(value = "/sitter/{sitterPrincipal:.+}", produces = "application/json")
    @ResponseBody
    public List<BookingDto> getBookingsBySitterPrincipal(@PathVariable("sitterPrincipal") String sitterPrincipal) {
        List<BookingDto> theList = bookingService.findBookingsBySitterPrincipal(sitterPrincipal);
        return theList;
    }

    @GetMapping(value = "/owner/{ownerPrincipal:.+}", produces = "application/json")
    @ResponseBody
    public List<BookingDto> getBookingsByOwnerPrincipal(@PathVariable("ownerPrincipal") String ownerPrincipal) {
        return bookingService.findBookingsByOwnerPrincipal(ownerPrincipal);
    }

    @PostMapping(value = "/add-booking", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public BookingDto saveBooking(@RequestBody BookingDto bookingDto) {
        bookingService.save(bookingDto);
        return bookingDto;
    }

}
