package petfinder.site.common.date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.pet.PetDto;
import java.util.ArrayList;
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


    //TODO: CHANGE THIS TO A LIST
    public List<DateDto> findDateBySitter(String sitterPrincipal) {
        List<Optional<DateDto>> dummy = dateDao.findDateBySitter(sitterPrincipal);
        List<DateDto> dateDto = dummy.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
        return dateDto;
    }
/*
======= THIS IS OLD, IDK JUST KEEPING AROUND IF SOMEONE WANTS TO LOOK AT
    public List<Optional<DateDto>> findDateBySitter(String sitterPrincipal){
        List<Optional<DateDto>> theList = dateDao.findDateBySitter(sitterPrincipal);
        List<Optional<DateDto>> newList = new ArrayList<>();
        for(Optional<DateDto> d : theList){
            if(!d.get().getDeleted())
                newList.add(d);
            System.out.println(d.get().getEndDate());
        }

        return newList;
>>>>>>> e191b8e76e2abdd0f9adefbaee26a734ee3a4ced
    }
*/
    public void saveDate(DateDto dateDto){
        dateDao.saveDate(dateDto);
    }
}
