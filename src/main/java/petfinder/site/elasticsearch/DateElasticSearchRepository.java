package petfinder.site.elasticsearch;


import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository;
import org.elasticsearch.client.ElasticsearchClient;
import org.springframework.beans.factory.annotation.Autowired;
import petfinder.site.common.date.DateDto;
import org.springframework.stereotype.Service;

@Service
public class DateElasticSearchRepository extends ElasticSearchRepository.ElasticSearchJsonRepository<DateDto, Long>  {

    @Autowired
    public DateElasticSearchRepository(ElasticSearchClientProvider provider){
        super(new ElasticSearchIndex(provider, "date"), DateDto.class);
    }
}
