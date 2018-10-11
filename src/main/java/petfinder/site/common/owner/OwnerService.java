package petfinder.site.common.owner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OwnerService {
    @Autowired
    OwnerDao ownerDao;

    public Optional<OwnerDto> findOwner(String principal){
        return ownerDao.findOwner(principal);
    }

    public void save(OwnerDto ownerDto){
        ownerDao.save(ownerDto);
    }
}
