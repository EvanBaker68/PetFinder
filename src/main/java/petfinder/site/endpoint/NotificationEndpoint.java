package petfinder.site.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import petfinder.site.common.Notification.NotificationDto;
import petfinder.site.common.Notification.NotificationService;

import java.util.List;

@RestController
@RequestMapping(value = "/notification")
public class NotificationEndpoint {
    @Autowired
    NotificationService notificationService;


    @PostMapping(value = "/add-notification", produces = "application/json", consumes = "application/json")
    @ResponseBody
    public void saveNotification(@RequestBody NotificationDto notificationDto){
        notificationService.saveNotification(notificationDto);
    }


    @GetMapping(value = "/getbysitterprincipal/{sitterPrincipal:.+}", produces = "application/json")
    @ResponseBody
    public List<NotificationDto> getBySitterPrincipal(@PathVariable("sitterPrincipal") String sitterPrincipal){
        List<NotificationDto> theList =  notificationService.findBySitterPrincipal(sitterPrincipal);
        for(NotificationDto item : theList){
            System.out.println("Heres the sitter: " + item.getSitterPrincipal());
        }

        return theList;
    }

    @GetMapping(value = "/getbyownerprincipal/{ownerPrincipal:.+}", produces = "application/json")
    @ResponseBody
    public List<NotificationDto> getByOwnerPrincipal(@PathVariable("ownerPrincipal") String ownerPrincipal){
        return notificationService.findByOwnerPrincipal(ownerPrincipal);
    }
}
