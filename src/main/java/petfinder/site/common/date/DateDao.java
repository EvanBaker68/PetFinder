package petfinder.site.common.date;

import petfinder.site.elasticsearch.DateElasticSearchRepository;
import alloy.elasticsearch.ElasticSearchClientProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public class DateDao {
    @Autowired
    private DateElasticSearchRepository dateElasticsearchRepository;

    @Autowired
    private ElasticSearchClientProvider elasticSearchClientProvider;

    public Optional<DateDto> findDate(Long id){
        return dateElasticsearchRepository.find(id);
    }

    public void saveDate(DateDto dateDto){
        dateElasticsearchRepository.save(dateDto);
    }


}
