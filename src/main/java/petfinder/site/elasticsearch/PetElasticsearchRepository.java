package petfinder.site.elasticsearch;

import org.springframework.stereotype.Service;

import alloy.elasticsearch.ElasticSearchClientProvider;
import alloy.elasticsearch.ElasticSearchIndex;
import alloy.elasticsearch.ElasticSearchRepository.ElasticSearchJsonRepository;
import petfinder.site.common.pet.PetDto;

@Service
public class PetElasticsearchRepository extends ElasticSearchJsonRepository<PetDto, Long> {
	public PetElasticsearchRepository(ElasticSearchClientProvider provider) {
<<<<<<< HEAD
		super(new ElasticSearchIndex(provider, "petfinder-pets"), PetDto.class);
=======
		super(new ElasticSearchIndex(provider, "pet"), PetDto.class);
>>>>>>> 56e47e5e6916a02a71dd9c4ad68b5bd024b2ecb6
	}
}