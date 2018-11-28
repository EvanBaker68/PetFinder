package petfinder.site.common.owner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OwnerService {
    @Autowired
    OwnerDao ownerDao;

    public OwnerDto findOwner(String principal){
        Optional<OwnerDto> dummy = ownerDao.findOwner(principal);
        OwnerDto ownerDto = dummy.get();
        return ownerDto;
    }

    public void save(OwnerDto ownerDto){
        ownerDao.save(ownerDto);
    }
}
