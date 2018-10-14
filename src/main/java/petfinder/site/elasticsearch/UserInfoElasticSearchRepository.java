package petfinder.site.elasticsearch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
import petfinder.site.common.user.UserAuthenticationDto;
import petfinder.site.common.user.UserDto;

@Service
public class UserInfoElasticSearchRepository extends ElasticSearchJsonRepository<UserDto, String> {
    @Autowired
    public UserInfoElasticSearchRepository(ElasticSearchClientProvider provider) {
        super(new ElasticSearchIndex(provider, "user"), UserDto.class);
    }
}
