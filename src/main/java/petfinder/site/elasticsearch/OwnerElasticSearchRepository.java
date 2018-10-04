package petfinder.site.elasticsearch;

import org.springframework.stereotype.Service;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
import petfinder.site.common.owner.OwnerDto;
import petfinder.site.common.user.UserAuthenticationDto;

public class OwnerElasticSearchRepository extends ElasticSearchJsonRepository<OwnerDto, String> {
    public OwnerElasticSearchRepository(ElasticSearchClientProvider provider) {
        super(new ElasticSearchIndex(provider, "owner"), OwnerDto.class);
        }
}
