package petfinder.site.common.sitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void save(SitterDto sitterDto) {
        sitterDao.save(sitterDto);
    }
}
