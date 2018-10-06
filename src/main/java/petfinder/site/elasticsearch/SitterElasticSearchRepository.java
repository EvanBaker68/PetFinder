package petfinder.site.elasticsearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
<<<<<<< HEAD
import petfinder.site.common.sitter.SitterDto;
=======
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchMomentoRepository;
import alloy.util.Serializer;
import petfinder.site.common.sitter.SitterDto;
import petfinder.site.common.user.UserAuthenticationDto;
>>>>>>> Andrew


@Service
public class SitterElasticSearchRepository  extends ElasticSearchJsonRepository<SitterDto, String> {

    @Autowired
    public SitterElasticSearchRepository(ElasticSearchClientProvider provider) {
        super(new ElasticSearchIndex(provider, "sitter"), SitterDto.class);
    }
}
