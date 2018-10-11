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

    public Optional<OwnerDto> findOwner(String principal){
        return repository.find(principal);

//        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
//
//        String queryString = String.format("owner.principal=\"%s\"", principal.replace("\"", ""));
//        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));
//
//        return repository.search(searchSourceBuilder).stream().findFirst();
    }


    public void save(OwnerDto ownerDto){
        repository.save(ownerDto);
    }
}
