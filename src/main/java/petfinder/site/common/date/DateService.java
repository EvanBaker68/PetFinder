package petfinder.site.common.date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.pet.PetDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DateService {

    @Autowired
    DateDao dateDao;

    public Optional<DateDto> findDate(Long id){
        return dateDao.findDate(id);
    }

    public List<Optional<DateDto>> findDateBySitter(String sitterPrincipal){
        List<Optional<DateDto>> theList = dateDao.findDateBySitter(sitterPrincipal);
        List<Optional<DateDto>> newList = new ArrayList<>();
        for(Optional<DateDto> d : theList){
            if(!d.get().getDeleted())
                newList.add(d);
            System.out.println(d.get().getEndDate());
        }

        return newList;
    }

    public void saveDate(DateDto dateDto){
        dateDao.saveDate(dateDto);
    }
}
