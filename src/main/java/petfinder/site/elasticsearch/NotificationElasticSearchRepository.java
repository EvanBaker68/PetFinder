package petfinder.site.elasticsearch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
import alloy.elasticsearch.ElasticSearchRepository;
import petfinder.site.common.Notification.NotificationDto;
import petfinder.site.common.owner.OwnerDto;

@Service
public class NotificationElasticSearchRepository extends ElasticSearchJsonRepository<NotificationDto, Long> {
    @Autowired
    public NotificationElasticSearchRepository(ElasticSearchClientProvider provider){
        super(new ElasticSearchIndex(provider, "notification"), NotificationDto.class);
    }

}
