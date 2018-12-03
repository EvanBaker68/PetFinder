package petfinder.site.strategy;

import petfinder.site.common.sitter.SitterDto;

import java.util.List;
import java.util.stream.Collectors;

//NEED to use generics with this but have a copy with out it written down
//text drew 5126946416 to get picture of algorithm without generics
public class ShellSort {

    public static List<SitterDto> sort(List<SitterDto> arr){
        return arr.stream().sorted((SitterDto o1,SitterDto o2) -> o1.getRate().compareTo(o2.getRate())).collect(Collectors.toList());
    }


}
