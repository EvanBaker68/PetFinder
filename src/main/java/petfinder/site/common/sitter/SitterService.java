package petfinder.site.common.sitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.strategy.ShellSort;
import petfinder.site.strategy.ShellSort;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SitterService {

    @Autowired
    private SitterDao sitterDao;

    public SitterDto findSitter(String principal) {
        Optional<SitterDto> dummy = sitterDao.findSitter(principal);
        SitterDto temp = dummy.get();
        return temp;
    }

    public List<SitterDto> findSitterInCityWithRating(String city){
        List<Optional<SitterDto>> temp = sitterDao.findSittersByCity(city);
        List<SitterDto> tempNoOptional = temp.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());;
        List<SitterDto> arr = ShellSort.shellSort(tempNoOptional);
        return arr;
    }

    public void save(SitterDto sitterDto) {
        sitterDao.save(sitterDto);
    }
}
