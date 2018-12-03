package petfinder.site.common.user;

import java.util.stream.Collectors;
import java.util.List;
import java.util.Optional;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import petfinder.site.elasticsearch.UserElasticSearchRepository;
import petfinder.site.elasticsearch.UserInfoElasticSearchRepository;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Repository
public class UserDao {
	@Autowired
	private UserElasticSearchRepository repository;

	@Autowired
	private UserInfoElasticSearchRepository userInfoElasticSearchRepository;

	public Optional<UserAuthenticationDto> findUser(String id) {
		//I commented out the UserAuthenticationDt0.class, IDK why it was there
		return repository.find(id/*, UserAuthenticationDto.class*/);
	}

	public Optional<UserAuthenticationDto> findUserByPrincipal(String principal) {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

		String queryString = String.format("user.principal=\"%s\"", principal.replace("\"", ""));
		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		return repository.search(searchSourceBuilder).stream().findFirst();
	}

	public void save(UserAuthenticationDto userAuthentication) {
		repository.save(userAuthentication);
	}

	public void saveInfo(UserDto userDto) {
		userInfoElasticSearchRepository.save(userDto);
	}

	public List<Optional<UserAuthenticationDto>> findByCity(String city, String type) {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		String queryString = "";
		if(type.equals("sitter")){
			queryString = String.format("user.city=\"%s\"", city.replace("\"", ""));
		} else if(type.equals("owner")){
			queryString = String.format("user.city=\"%s\"&user.owner=\"true\"Z", city.replace("\"", ""));

		}
		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		return repository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
				.collect(Collectors.toList());
	}

}
