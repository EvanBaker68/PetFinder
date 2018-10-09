package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.date.DateDto;
import petfinder.site.common.date.DateService;

import java.util.Optional;

@RestController
@RequestMapping(value = "/date")
public class DateEndpoint {
    @Autowired
    DateService dateService;

    @GetMapping(value = "/{id}", produces = "application/json")
    @ResponseBody
    public Optional<DateDto> getDate(@PathVariable("id") Long id) { return dateService.findDate(id);}

    @PostMapping(value = "/add-date", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public DateDto saveDate(@RequestBody DateDto dateDto) {
        dateService.saveDate(dateDto);
        return dateDto;
    }
}
