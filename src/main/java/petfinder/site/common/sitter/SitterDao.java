package petfinder.site.common.sitter;

import java.util.Optional;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import alloy.elasticsearch.ElasticSearchClientProvider;
//import petfinder.site.elasticsearch.SitterElasticSearchRepository;

@Repository
public class SitterDao {
//    @Autowired
//    private SitterElasticSearchRepository repository;
//
//    public Optional<SitterDto> findSitter(String id){
//        return repository.find(id);
//    }
//
//    public void save(SitterDto sitterDto){
//        repository.save(sitterDto);
//    }
}
