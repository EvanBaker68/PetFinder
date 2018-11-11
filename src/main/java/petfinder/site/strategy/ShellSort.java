package petfinder.site.strategy;

import petfinder.site.common.sitter.SitterDto;

//NEED to use generics with this but have a copy with out it written down
//text drew 5126946416 to get picture of algorithm without generics
public class ShellSort {


    boolean shellSort(SitterDto[] arr){
        int n = arr.length;
        for(int gap = n / 2; gap > 0; gap /= 2){
            for(int i = gap; i < n; i++){
                SitterDto temp = arr[i];
                int j;
                for(j = i; j >= gap && arr[j - gap].getRate() > temp.getRate(); j -= gap){
                    arr[j] = arr[j - gap];
                    arr[j] = temp;
                }
            }
        }
        return true;
    }


}
