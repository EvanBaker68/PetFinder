package petfinder.site.elasticsearch;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petfinder.site.common.booking.BookingDto;
import petfinder.site.common.user.UserAuthenticationDto;


@Service
public class BookingElasticSearchRepository extends ElasticSearchRepository.ElasticSearchJsonRepository<BookingDto, Long> {

    @Autowired
    public BookingElasticSearchRepository(ElasticSearchClientProvider provider){
        super(new ElasticSearchIndex(provider, "booking"), BookingDto.class);
    }
}
