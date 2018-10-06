package petfinder.site.common.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import petfinder.site.elasticsearch.OwnerElasticSearchRepository;


@Repository
public class OwnerDao {
    @Autowired
    private OwnerElasticSearchRepository repository;

    public Optional<OwnerDto> findOwner(String id){
        return repository.find(id);
    }

    public void save(OwnerDto ownerDto){
        repository.save(ownerDto);
    }
}
