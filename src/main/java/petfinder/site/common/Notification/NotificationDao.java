package petfinder.site.common.Notification;

import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import petfinder.site.elasticsearch.NotificationElasticSearchRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class NotificationDao {
    @Autowired
    private NotificationElasticSearchRepository repository;

    public Optional<NotificationDto> findById(Long id){
        return repository.find(id);
    }

    public void save(NotificationDto notificationDto){
        repository.save(notificationDto);
    }

    public List<Optional<NotificationDto>> findByOwnerPrincipal(String ownerPrincipal) {
        QueryBuilder queryBuilder = QueryBuilders.matchPhraseQuery("ownerPrincipal", ownerPrincipal);
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.size(100);
        searchSourceBuilder.query(queryBuilder);
        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable).collect(Collectors.toList());
    }

    public List<Optional<NotificationDto>> findBySitterPrincipal(String sitterPrincipal){
        QueryBuilder queryBuilder = QueryBuilders.matchPhraseQuery("sitterPrincipal", sitterPrincipal);
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query(queryBuilder);
        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable).collect(Collectors.toList());
    }

}
