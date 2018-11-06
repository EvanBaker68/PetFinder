package petfinder.site.test.unit;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import petfinder.site.common.owner.OwnerDto;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
public class OwnerTest {

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
            OwnerDto ownerDto = new OwnerDto(principal, currentBookings, pastBookings, petIds, numPets);
            assertAll(
                    ()-> assertNotNull(ownerDto),
                    ()-> assertEquals(principal, ownerDto.getPrincipal()),
                    ()-> assertEquals(principal, ownerDto.getMomento()),
                    ()-> assertEquals(currentBookings, ownerDto.getCurrentBookings()),
                    ()-> assertEquals(pastBookings, ownerDto.getPastBookings()),
                    ()-> assertEquals(petIds, ownerDto.getPetIds()),
                    ()-> assertEquals(numPets, ownerDto.getPetIds().size())
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
            OwnerDto ownerDto = new OwnerDto(principal, currentBookings, pastBookings, petIds, numPets);

            assertAll(
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        ownerDto.setPrincipal(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()->{
                        ownerDto.setCurrentBookings(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        ownerDto.setPastBookings(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        ownerDto.setPetIds(null);
                    }),
                    ()-> assertThrows(IllegalArgumentException.class, ()-> {
                        ownerDto.setNumPets(-1);
                    })
            );
        }
    }


}
