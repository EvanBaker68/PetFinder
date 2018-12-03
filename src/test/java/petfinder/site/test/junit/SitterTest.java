package petfinder.site.test.junit;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import petfinder.site.common.sitter.SitterDto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
public class SitterTest {

    @Nested
    @DisplayName("Testing Owner Basics")
    public class TestingOwnerBasics{

        @Test
        @DisplayName("Testing working values")
        public void testingWorkingValues() throws IllegalArgumentException{
            String principal = "drewb97@gmail.com";
            List<Long> currentBookings = new ArrayList<>();
            List<Long> pastBookings = new ArrayList<>();
            List<Long> petIds = new ArrayList<>();
            int numPets = 1;
            petIds.add(8L);
            currentBookings.add(69L);
            pastBookings.add(420L);
            Long[] ccurrentBookings = currentBookings.toArray(new Long[0]);
            Long[] ppastBookings = pastBookings.toArray(new Long[0]);
            Double rate = 1.0;
            SitterDto ownerDto = new SitterDto(principal, rate);
            assertAll(
                    ()-> assertNotNull(ownerDto),
                    ()-> assertEquals(principal, ownerDto.getPrincipal()),
                    ()-> assertEquals(principal, ownerDto.getMomento()),
                    ()-> assertEquals(rate, ownerDto.getRate())
            );
        }


        @Test
        @DisplayName("Testing bad Values")
        public void testingBadValues() throws IllegalArgumentException {
            String principal = "drewb97@gmail.com";
            List<Long> currentBookings = new ArrayList<>();
            List<Long> pastBookings = new ArrayList<>();
            List<Long> petIds = new ArrayList<>();
            int numPets = 1;
            petIds.add(8L);
            currentBookings.add(69L);
            pastBookings.add(420L);
            Long[] ccurrentBookings = currentBookings.toArray(new Long[0]);
            Long[] ppastBookings =  pastBookings.toArray(new Long[0]);
            Double rate = 2.0;
            SitterDto ownerDto = new SitterDto(principal, rate);

            assertAll(
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        ownerDto.setPrincipal(null);
                    })
            );
        }
    }
}
