package petfinder.site.endpoint;

import org.springframework.web.bind.annotation.*;
import petfinder.site.common.date.DateDto;
import petfinder.site.common.date.DateService;
import petfinder.site.common.sitter.SitterService;
import petfinder.site.common.sitter.SitterDto;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping(value = "/sitter")
public class SitterEndpoint {

    @Autowired
    SitterService sitterService;

    @Autowired
    DateService dateService;

    @GetMapping(value = "/{principal:.+}", produces = "application/json")
    @ResponseBody
    public SitterDto getSitter(@PathVariable("principal") String principal) {
        return sitterService.findSitter(principal);
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
    public List<DateDto> getDates(@PathVariable("sitterPrincipal") String sitterPrincipal) {
        System.out.println("made to endpoint");
        return dateService.findDateBySitter(sitterPrincipal);
    }


    @GetMapping(value = "/getsittersbycity/{city:.+}", produces = "application/json")
    @ResponseBody
    public List<SitterDto> getSittersByCity(@PathVariable("city") String city){
        return sitterService.findSitterInCityWithRating(city);
    }

    @GetMapping(value = "/getsittersbycityrecommended/{city:.+}", produces = "application/json")
    @ResponseBody
    public List<SitterDto> getSittersByCityRecommended(@PathVariable("city") String city){
        return sitterService.findSitterInCityWithRecommended(city);
    }
}
