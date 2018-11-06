package petfinder.site.test.unit;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Nested;
import static org.junit.jupiter.api.Assertions.*;
import petfinder.site.common.pet.PetDto;
//import petfinder.site.ValidationException;
public class PetTest {

    @Nested
    @DisplayName("Testing values in PetDto ")
    public class TestValues{

        @Test
        @DisplayName("Testing constructor not null")
        void testConstructorNotNull() throws IllegalArgumentException{
            PetDto pet = new PetDto(1L,"drewb97@gmail.com", "coco", "mcdog");
            assertNotNull(pet);
            PetDto pet2 = new PetDto();
            assertNotNull(pet2);


        }

        @Test
        @DisplayName("Testing Setters invalid types")
        void testSetters() throws IllegalArgumentException{
            PetDto pet = new PetDto();
            //null values
            assertThrows(IllegalArgumentException.class, () -> {
                pet.setName(null);
            });
            assertThrows(IllegalArgumentException.class, () -> {
                pet.setOwnerPrincipal(null);
            });
            assertThrows(IllegalArgumentException.class, () -> {
                pet.setId(null);
            });
            assertThrows(IllegalArgumentException.class, () -> {
                pet.setPetType(null);
            });

            assertThrows(IllegalArgumentException.class, () -> {
                pet.setId(-1L);
            });

            assertThrows(IllegalArgumentException.class, () -> {
                pet.setOwnerPrincipal("yeet");
            });

            assertThrows(IllegalArgumentException.class, () -> {
                pet.setAge(-1.0);
            });
        }

        @Test
        @DisplayName("Testing Getters equal")
        void testGettersEquals() throws IllegalArgumentException {
            PetDto pet = new PetDto(1L, "drewb97@gmail.com", "coco", "mcdog");
            assertAll("All should be true",
                    () -> assertEquals((Long)1L, pet.getId()),
                    () -> assertEquals("drewb97@gmail.com", pet.getOwnerPrincipal()),
                    () -> assertEquals("coco", pet.getName()),
                    () -> assertEquals("mcdog", pet.getPetType())
                    );
        }



    }
}
