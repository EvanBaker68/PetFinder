package petfinder.site.elasticsearch;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.booking.BookingDto;

@Service
public class BookingElasticSearchRepository extends ElasticSearchJsonRepository<BookingDto, Long> {

    @Autowired
    public BookingElasticSearchRepository(ElasticSearchClientProvider provider){
        super(new ElasticSearchIndex(provider, "booking"), BookingDto.class);
    }
}
