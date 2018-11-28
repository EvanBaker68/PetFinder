package petfinder.site.common.date;

import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.client.ElasticsearchClient;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.reindex.BulkByScrollResponse;
import org.elasticsearch.index.reindex.DeleteByQueryAction;
import org.elasticsearch.index.reindex.DeleteByQueryRequest;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import petfinder.site.elasticsearch.DateElasticSearchRepository;
import alloy.elasticsearch.ElasticSearchClientProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.net.InetAddress;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<Optional<DateDto>> findDateBySitter(String sitterPrincipal){
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();


        String queryString = String.format("date.sitterPrincipal=\"%s\"", sitterPrincipal.replace("\"", ""));

        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));
        return dateElasticsearchRepository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
                .collect(Collectors.toList());
    }

    public void saveDate(DateDto dateDto){






        /*DeleteByQueryAction.INSTANCE.
                .filter(QueryBuilders.matchQuery("sitterPrincipal", dateDto.getSitterPrincipal()))
                .source("date")
                .get();*/

        dateElasticsearchRepository.save(dateDto);
    }


}
