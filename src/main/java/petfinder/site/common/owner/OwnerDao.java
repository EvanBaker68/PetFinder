package petfinder.site.common.owner;

import java.util.Optional;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import alloy.elasticsearch.ElasticSearchClientProvider;
import petfinder.site.elasticsearch.OwnerElasticSearchRepository;
import petfinder.site.elasticsearch.SitterElasticSearchRepository;


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
