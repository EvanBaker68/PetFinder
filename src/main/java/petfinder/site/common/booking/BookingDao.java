package petfinder.site.common.booking;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import petfinder.site.elasticsearch.BookingElasticSearchRepository;

@Repository
public class BookingDao {
    @Autowired
    private BookingElasticSearchRepository repository;


    public Optional<BookingDto> findBooking(Long id){
        return repository.find(id);
    }

    public List<Optional<BookingDto>> findBookingBySitterPrincipal(String sitterPrincipal) {

        /*SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        String queryString = "";
        queryString = String.format("booking.sitterPrincipal=\"%s\"", sitterPrincipal.replace("\"", ""));

        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        //TODO: add thrown exception

        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
                .collect(Collectors.toList());*/

        SearchRequest searchRequest = new SearchRequest();
        QueryBuilder queryBuilder = QueryBuilders.matchPhraseQuery("sitterPrincipal", sitterPrincipal);
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query(queryBuilder);
        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable).collect(Collectors.toList());
    }

    public List<Optional<BookingDto>> findBookingByOwnerPrincipal(String ownerPrincipal) {
        SearchRequest searchRequest = new SearchRequest();
        QueryBuilder queryBuilder = QueryBuilders.matchPhraseQuery("ownerPrincipal", ownerPrincipal);
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.query(queryBuilder);
        return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable).collect(Collectors.toList());
    }

    public void save(BookingDto bookingDto){
        repository.save(bookingDto);
    }

}
