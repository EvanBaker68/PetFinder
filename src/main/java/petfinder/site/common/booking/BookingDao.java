package petfinder.site.common.booking;

import java.util.Map;
import java.util.Optional;

import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.google.common.collect.ImmutableMap;

import alloy.elasticsearch.ElasticSearchClientProvider;
import petfinder.site.elasticsearch.BookingElasticSearchRepository;

@Repository
public class BookingDao {
    @Autowired
    private BookingElasticSearchRepository repository;


    public Optional<BookingDto> findBooking(Long id){
        return repository.find(id);
    }

    public void save(BookingDto bookingDto){
        repository.save(bookingDto);
    }

}
