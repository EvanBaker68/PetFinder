package petfinder.site.common.sitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SitterService {

    @Autowired
    private SitterDao sitterDao;


    public Optional<SitterDto> findSitter(String id) {
        return sitterDao.findSitter(id);
    }

    public void save(SitterDto sitterDto) {
        sitterDao.save(sitterDto);
    }
}
