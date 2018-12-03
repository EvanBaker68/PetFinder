package petfinder.site.common.pet;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import alloy.elasticsearch.ElasticSearchClientProvider;
import petfinder.site.elasticsearch.PetElasticsearchRepository;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Repository
public class PetDao {
	@Autowired
	private PetElasticsearchRepository petElasticsearchRepository;

	@Autowired
	private ElasticSearchClientProvider elasticSearchClientProvider;

	public Optional<PetDto> findPet(Long id) {
		return petElasticsearchRepository.find(id);
	}

	public List<Optional<PetDto>> findPetByPrincipal(String ownerPrincipal) {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		String queryString = "";
		queryString = String.format("pet.ownerPrincipal=\"%s\"", ownerPrincipal.replace("\"", ""));

		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		return petElasticsearchRepository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
				.collect(Collectors.toList());
	}

	public Optional<PetDto> findPetLowTech(Long id) {
		RestHighLevelClient client = elasticSearchClientProvider.getClient();

		return Optional.empty();
	}

	public void save(PetDto pet) {
		petElasticsearchRepository.save(pet);
	}
}