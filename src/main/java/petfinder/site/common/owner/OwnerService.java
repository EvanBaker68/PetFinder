package petfinder.site.common.owner;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;
public class OwnerService {
    @Autowired
    OwnerDao ownerDao;

    public Optional<OwnerDto> findOwner(String id){
        return ownerDao.findOwner(id);
    }

    public void save(OwnerDto ownerDto){
        ownerDao.save(ownerDto);
    }
}
