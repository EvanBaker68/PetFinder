package petfinder.site.common.strategey;

import petfinder.site.common.sitter.SitterDto;

import java.util.List;
import java.util.stream.Collectors;

public class Sort{

    public static List<SitterDto> doSort(List<SitterDto> arr){
        return arr.stream().sorted((SitterDto o1, SitterDto o2) -> o1.getRating().compareTo(o2.getRating())).collect(Collectors.toList());
    }
}
