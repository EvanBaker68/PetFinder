package petfinder.site.common.date;

import org.elasticsearch.index.query.QueryBuilders;

import org.elasticsearch.search.builder.SearchSourceBuilder;
import petfinder.site.elasticsearch.DateElasticSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class DateDao {
    @Autowired
    private DateElasticSearchRepository dateElasticsearchRepository;

    public Optional<DateDto> findDate(Long id){
        return dateElasticsearchRepository.find(id);
    }

    public List<Optional<DateDto>> findDateBySitter(String sitterPrincipal){
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();


        String queryString = String.format("date.sitterPrincipal=\"%s\"", sitterPrincipal.replace("\"", ""));
        searchSourceBuilder.size(100);
        searchSourceBuilder.query(QueryBuilders.queryStringQuery(queryString));
        return dateElasticsearchRepository.search(searchSourceBuilder).stream().map(Optional::ofNullable)
                .collect(Collectors.toList());
    }

    public void saveDate(DateDto dateDto){
        List<Optional<DateDto>> list = findDateBySitter(dateDto.getSitterPrincipal());
        for (Optional<DateDto> date : list) {
            dateElasticsearchRepository.delete(date.get().getId());
        }
        dateElasticsearchRepository.save(dateDto);
    }


}
