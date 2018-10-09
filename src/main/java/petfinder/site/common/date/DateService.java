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

    public Optional<DateDto>[] findByRange(String startDate, String endDate){

        return null;
    }
    public Optional<DateDto> findDateBySitter(String sitterPrinciple){
        return dateDao.findDateBySitter(sitterPrinciple);
    }

    public void saveDate(DateDto dateDto){
        dateDao.saveDate(dateDto);
    }
}
