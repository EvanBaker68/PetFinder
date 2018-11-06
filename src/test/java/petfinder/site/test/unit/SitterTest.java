package petfinder.site.test.unit;
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
            SitterDto ownerDto = new SitterDto(principal, ccurrentBookings, ppastBookings);
            assertAll(
                    ()-> assertNotNull(ownerDto),
                    ()-> assertEquals(principal, ownerDto.getPrincipal()),
                    ()-> assertEquals(principal, ownerDto.getMomento()),
                    ()-> assertArrayEquals(ccurrentBookings, ownerDto.getCurrentBookings()),
                    ()-> assertArrayEquals(ppastBookings, ownerDto.getPastBookings())
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
            SitterDto ownerDto = new SitterDto(principal, ccurrentBookings, ppastBookings);

            assertAll(
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        ownerDto.setPrincipal(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()->{
                        ownerDto.setCurrentBookings(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        ownerDto.setPastBookings(null);
                    })
            );
        }
    }
}
