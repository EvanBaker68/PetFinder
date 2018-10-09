package petfinder.site.test.unit;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Nested;
import static org.junit.jupiter.api.Assertions.*;
import petfinder.site.ValidationException;
import petfinder.site.common.pet.PetDto;

public class PetTest {

    @Nested
    @DisplayName("Testing values in PetDto ")
    public class TestValues{

        @Test
        @DisplayName("Testing constructor not null")
        void testConstructorNotNull() throws ValidationException{
            PetDto pet = new PetDto(1L,"drewb97@gmail.com", "coco", "mcdog");
            assertNotNull(pet);
            PetDto pet2 = new PetDto();
            assertNotNull(pet2);
        }

        @Test
        @DisplayName("Testing Setters invalid types")
        void testSetters() throws ValidationException{
            PetDto pet = new PetDto();
            //null values
            assertThrows(ValidationException.class, () -> {
                pet.setName(null);
            });
            assertThrows(ValidationException.class, () -> {
                pet.setOwnerPrinciple(null);
            });
            assertThrows(ValidationException.class, () -> {
                pet.setPetId(null);
            });
            assertThrows(ValidationException.class, () -> {
                pet.setPetType(null);
            });

            assertThrows(ValidationException.class, () -> {
                pet.setPetId(-1L);
            });

            assertThrows(ValidationException.class, () -> {
                pet.setOwnerPrinciple("yeet");
            });

            assertThrows(ValidationException.class, () -> {
                pet.setAge(-1.0);
            });
        }

        @Test
        @DisplayName("Testing Getters equal")
        void testGettersEquals() throws ValidationException {
            PetDto pet = new PetDto(1L, "drewb97@gmail.com", "coco", "mcdog");
            assertAll("All should be true",
                    () -> assertEquals((Long)1L, pet.getId()),
                    () -> assertEquals("drewb97@gmail.com", pet.getOwnerPrinciple()),
                    () -> assertEquals("coco", pet.getName()),
                    () -> assertEquals("mcdog", pet.getPetType())
                    );
        }



    }
}
