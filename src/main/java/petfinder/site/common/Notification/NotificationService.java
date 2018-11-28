package petfinder.site.common.Notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NotificationService {
    @Autowired
    NotoficationDao notoficationDao;

    public NotificationDto findNotificationById(Long id){
        Optional<NotificationDto> notificationDto = notoficationDao.findById(id);
        if(notificationDto.isPresent()){
            return notificationDto.get();
        }
        return null;
    }
    public List<NotificationDto> findBySitterPrincipal(String sitterPrincipal){
        return notoficationDao.findBySitterPrincipal(sitterPrincipal).stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
    }

    public List<NotificationDto> findByOwnerPrincipal(String sitterPrincipal){
        return notoficationDao.findByOwnerPrincipal(sitterPrincipal).stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
    }
}
