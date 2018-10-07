package petfinder.site.common.date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DateService {
    @Autowired
    DateDao dateDao;

    public Optional<DateDto> findDate(Long id){
        return dateDao.findDate(id);
    }

    public void saveDate(DateDto dateDto){
        dateDao.saveDate(dateDto);
    }
}
