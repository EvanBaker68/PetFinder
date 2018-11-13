package petfinder.site.strategy;

import petfinder.site.common.sitter.SitterDto;

import java.util.List;

//NEED to use generics with this but have a copy with out it written down
//text drew 5126946416 to get picture of algorithm without generics
public class ShellSort {


    public static List<SitterDto> shellSort(List<SitterDto> arr){
        int n = arr.size();
        for(int gap = n / 2; gap > 0; gap /= 2){
            for(int i = gap; i < n; i++){
                SitterDto temp = arr.get(i);
                int j;
                for(j = i; j >= gap && arr.get(j - gap).getRate() > temp.getRate(); j -= gap){
                    arr.set(i, arr.get(j - gap));
                    arr.set(j, temp);
                }
            }
        }
        return arr;
    }


}
