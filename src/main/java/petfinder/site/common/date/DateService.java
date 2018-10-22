package petfinder.site.common.date;

import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DateService {

    @Autowired
    DateDao dateDao;

    public Optional<DateDto> findDate(Long id){
        return dateDao.findDate(id);
    }

    public List<DateDto> findDateBySitter(String sitterPrinciple, String startDate, String endDate){
        List<Optional<DateDto>> allDates =  dateDao.findDatesBySitter(sitterPrinciple, startDate, endDate);
        List<DateDto> newDates = allDates.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
        return newDates;
    }


    public void saveDate(DateDto dateDto){
        dateDao.saveDate(dateDto);
    }
}
