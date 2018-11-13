package petfinder.site.endpoint;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.date.DateDto;
import petfinder.site.common.date.DateService;
import petfinder.site.common.sitter.SitterService;
import petfinder.site.common.sitter.SitterDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/api/sitter")
public class SitterEndpoint {

    @Autowired
    SitterService sitterService;

    @Autowired
    DateService dateService;

    @GetMapping(value = "/{principal:.+}", produces = "application/json")
    @ResponseBody
    public Optional<SitterDto> getSitter(@PathVariable("principal") String principal) {
        if (principal.equals(SecurityContextHolder.getContext().getAuthentication().getName())) {
            return sitterService.findSitter(principal);
        }
        else {
            return Optional.empty();
        }
    }

    @PostMapping(value = "/add-sitter", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public SitterDto saveSitter(@RequestBody SitterDto sitter) {
        sitterService.save(sitter);
        return sitter;
    }

    @PostMapping(value = "/add-date", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public DateDto saveDate(@RequestBody DateDto date) {
        System.out.println("date: " + date.getStartDate());
        dateService.saveDate(date);
        return date;
    }

    @GetMapping(value = "/get-dates/{sitterPrincipal:.+}", produces = "application/json")
    @ResponseBody
    public List<Optional<DateDto>> getDates(@PathVariable("sitterPrincipal") String sitterPrincipal) {
        System.out.println("made to endpoint");
        if (sitterPrincipal.equals(SecurityContextHolder.getContext().getAuthentication().getName())) {
            return dateService.findDateBySitter(sitterPrincipal);
        }
        else {
            Optional<DateDto> returnVal = Optional.empty();
            List<Optional<DateDto>> returnList = new ArrayList<>();
            returnList.add(returnVal);

            return returnList;
        }
    }
}
