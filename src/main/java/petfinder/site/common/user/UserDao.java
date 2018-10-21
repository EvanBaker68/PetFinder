package petfinder.site.common.user;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
	// JOHN
	public Optional<UserAuthenticationDto> findUser(String id) {
		//I commented out the UserAuthenticationDt0.class, IDK why it was there
		return repository.find(id/*, UserAuthenticationDto.class*/);
		//return null;
	}

	public Optional<UserAuthenticationDto> findUserByPrincipal(String principal) {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

		String queryString = String.format("user.principal=\"%s\"", principal.replace("\"", ""));
		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		return repository.search(searchSourceBuilder).stream().findFirst();
	}

	/*public Optional<UserDto> findUserByPrincipal(String principal) {
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		String queryString = String.format("user.principal=\"%s\"", principal.replace("\"", ""));
		//return repository.search(searchSourceBuilder).stream().findFirst();
	}*/
	public void save(UserAuthenticationDto userAuthentication) {
		repository.save(userAuthentication);
	}

	public void saveInfo(UserDto userDto) {
		userInfoElasticSearchRepository.save(userDto);
	}
public List<Optional<UserDto>> findByCity(String city, String type) {
		Boolean isSitter = false;
		Boolean isOwner = false;
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
		String queryString = "";
		if(type.equals("sitter")){
			isSitter = true;
			queryString = String.format("user.city=\"%s\"&user.isSitter=true", city.replace("\"", ""));
		} else if(type.equals("owner")){
			isOwner = true;
			queryString = String.format("user.city=\"%s\"&user.isOwner=true", city.replace("\"", ""));
		}
		searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

		//TODO: add thrown exception

		return userInfoElasticSearchRepository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
				.collect(Collectors.toList());
	}

}
