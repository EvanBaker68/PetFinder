package petfinder.site.elasticsearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchMomentoRepository;
import alloy.util.Serializer;
import petfinder.site.common.TestUser.TestUserDto;
import petfinder.site.common.user.UserAuthenticationDto;


public class TestUserElasticsearchRepository extends ElasticSearchJsonRepository<TestUserDto, String> {
    @Autowired
    public TestUserElasticsearchRepository(ElasticSearchClientProvider provider) {
        super(new ElasticSearchIndex(provider, "petfinder-users"), TestUserDto.class);
    }
}
