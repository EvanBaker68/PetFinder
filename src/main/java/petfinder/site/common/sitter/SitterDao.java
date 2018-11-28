package petfinder.site.common.sitter;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import alloy.elasticsearch.ElasticSearchClientProvider;
import petfinder.site.elasticsearch.SitterElasticSearchRepository;

@Repository
public class SitterDao {
    @Autowired
    private SitterElasticSearchRepository repository;

    public Optional<SitterDto> findSitter(String principal){
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

        String queryString = String.format("sitter.principal=\"%s\"", principal.replace("\"", ""));
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        return repository.search(searchSourceBuilder).stream().findFirst();
    }


    public List<Optional<SitterDto>> findSittersByCity(String city){
        SearchRequest searchRequest = new SearchRequest();
        QueryBuilder queryBuilder = QueryBuilders.matchPhraseQuery("city", city);
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query(queryBuilder);
        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable).collect(Collectors.toList());
    }

    public void save(SitterDto sitterDto){
        repository.save(sitterDto);
    }
}
