package petfinder.site.common.date;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import petfinder.site.elasticsearch.DateElasticSearchRepository;
import alloy.elasticsearch.ElasticSearchClientProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import org.elasticsearch.search.builder.SearchSourceBuilder;

@Repository
public class DateDao {
    @Autowired
    private DateElasticSearchRepository dateElasticsearchRepository;

    @Autowired
    private ElasticSearchClientProvider elasticSearchClientProvider;

    public Optional<DateDto> findDate(Long id){
        return dateElasticsearchRepository.find(id);
    }

    public Optional<DateDto> findDateBySitter(String sitterPrincipal){
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

        String queryString = String.format("user.principal=\"%s\"", sitterPrincipal.replace("\"", ""));

        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        return dateElasticsearchRepository.search(searchSourceBuilder).stream().findFirst();
    }

   /* public Optional<DateDto>[] rangeOfDatesWithUserId(String SitterPrinciple, String startDate, String endDate){
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        String queryString = String.format("sitt")
        return null;
    }*/

    public void saveDate(DateDto dateDto){
        dateElasticsearchRepository.save(dateDto);
    }


}
