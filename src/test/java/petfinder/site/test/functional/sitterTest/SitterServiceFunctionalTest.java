package petfinder.site.test.functional.sitterTest;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import petfinder.site.common.sitter.SitterDto;
import petfinder.site.strategy.ShellSort;

import java.util.ArrayList;
import java.util.logging.Logger;

import static org.junit.jupiter.api.Assertions.*;
public class SitterServiceFunctionalTest {

    @Test
    @DisplayName("Test Sitter Shell")
    public void testSitterShell(){
        MockSitterService mockSitterService = new MockSitterService();

        ShellSort sort = new ShellSort();

        ArrayList<SitterDto> dummy = (ArrayList)sort.sort(mockSitterService.getSitters());
        mockSitterService.setSitters(dummy);


        for(int i = 0; i < dummy.size() - 1; i++){
            System.out.println(dummy.get(i).getRate());
            if(dummy.get(i).getRate() < dummy.get(i).getRate()){
                assertTrue(false);
            }
        }
    }
}

