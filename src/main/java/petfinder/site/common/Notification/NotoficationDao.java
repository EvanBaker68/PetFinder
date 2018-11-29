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
public class NotoficationDao {
    @Autowired
    private NotificationElasticSearchRepository repository;

    public Optional<NotificationDto> findById(Long id){
        return repository.find(id);
    }

    public void save(NotificationDto notificationDto){
        repository.save(notificationDto);
    }

    public List<Optional<NotificationDto>> findByOwnerPrincipal(String ownerPrincipal) {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        String queryString = "";
        queryString = String.format("notification.ownerPrincipal=\"%s\"", ownerPrincipal.replace("\"", ""));

        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));


        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
                .collect(Collectors.toList());
    }

    public List<Optional<NotificationDto>> findBySitterPrincipal(String sitterPrincipal){
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        String queryString = "";
        queryString = String.format("notification.sitterPrincipal=\"%s\"", sitterPrincipal.replace("\"", ""));

        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        //TODO: add thrown exception

        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
                .collect(Collectors.toList());
    }

}
