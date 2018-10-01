package petfinder.site.common.TestUser;

import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import petfinder.site.common.user.UserAuthenticationDto;
import petfinder.site.elasticsearch.TestUserElasticsearchRepository;
import petfinder.site.elasticsearch.UserElasticSearchRepository;

import java.util.Optional;


@Repository
public class TestUserDao {

    @Autowired
    private TestUserElasticsearchRepository repository;

    public Optional<TestUserDto> findUserByEmail(String email) {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();

        String queryString = String.format("user.email=\"%s\"", email.replace("\"", ""));
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));

        return repository.search(searchSourceBuilder).stream().findFirst();
    }

    public void save(TestUserDto TestDto) {

        repository.save(TestDto);
    }




}
