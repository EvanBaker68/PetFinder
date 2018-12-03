package petfinder.site.common.date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DateService {

    @Autowired
    DateDao dateDao;

    public DateDto findDate(Long id){
        Optional<DateDto> dateDto = dateDao.findDate(id);
        DateDto dummy = dateDto.get();
        return dummy;
    }

    public List<DateDto> findDateBySitter(String sitterPrincipal) {
        List<Optional<DateDto>> dummy = dateDao.findDateBySitter(sitterPrincipal);
        List<DateDto> dateDto = dummy.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
        return dateDto;
    }

    public void saveDate(DateDto dateDto){
        dateDao.saveDate(dateDto);
    }

}
