package petfinder.site.common.Notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NotificationService {
    @Autowired
    NotificationDao notificationDao;

    public NotificationDto findNotificationById(Long id){
        Optional<NotificationDto> notificationDto = notificationDao.findById(id);
        if(notificationDto.isPresent()){
            return notificationDto.get();
        }
        return null;
    }
    public List<NotificationDto> findBySitterPrincipal(String sitterPrincipal){
        System.out.println("finding sitter: "+ sitterPrincipal);
        return notificationDao.findBySitterPrincipal(sitterPrincipal).stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
    }

    public List<NotificationDto> findByOwnerPrincipal(String ownerPrincipal){
        return notificationDao.findByOwnerPrincipal(ownerPrincipal).stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
    }

    public void saveNotification(NotificationDto notificationDto){
        notificationDao.save(notificationDto);
    }
}
