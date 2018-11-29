package petfinder.site.common.sitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.strategey.Sort;
import petfinder.site.strategy.ShellSort;
import petfinder.site.strategy.ShellSort;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import petfinder.site.strategy.*;

@Service
public class SitterService {

    @Autowired
    private SitterDao sitterDao;

    public SitterDto findSitter(String principal) {
        Optional<SitterDto> dummy = sitterDao.findSitter(principal);
        if(dummy.isPresent()) {
            return dummy.get();
        }
        return null;
    }

    public List<SitterDto> findSitterInCityWithRating(String city){
        List<Optional<SitterDto>> temp = sitterDao.findSittersByCity(city);
        List<SitterDto> tempNoOptional = temp.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());;
        return Sort.doSort(tempNoOptional);
    }

    public void save(SitterDto sitterDto) {
        sitterDao.save(sitterDto);
    }

    public List<SitterDto> findSitterInCityWithRecommended(String city){
        List<SitterDto> listy = findSitterInCityWithRating(city);
        List<SitterDto> newList = new ArrayList<>();
        newList.add(listy.get(0));
        newList.add(listy.get(1));
        newList.add(listy.get(2));
        return newList;
    }
}
