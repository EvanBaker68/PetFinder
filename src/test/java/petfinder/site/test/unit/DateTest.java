package petfinder.site.test.unit;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import petfinder.site.ValidationException;
import petfinder.site.common.date.DateDto;
import static org.junit.jupiter.api.Assertions.*;
public class DateTest {

    @Nested
    class TestBasicDate {


        @Test
        @DisplayName("Test constructor equals and null")
        void testConstructor() throws ValidationException {
            DateDto date = new DateDto("1/1/17", "1/8/17", "drewb97@gmail.com");
            assertNotNull(date);
        }

        @Test
        @DisplayName("Test Getters")
        void testGetters() throws ValidationException {
            DateDto date = new DateDto("1/1/17", "1/8/17", "drewb97@gmail.com");
            assertAll(
                    () -> assertEquals("1/1/17", date.getStartDate()),
                    () -> assertEquals("1/8/17", date.getEndDate()),
                    () -> assertEquals("drewb97@gmail.com", date.getSitterPrinciple())
            );
        }

        @Test
        @DisplayName("Test Setters")
        void testSetters() throws ValidationException {
            DateDto date = new DateDto();
            assertThrows(ValidationException.class, () -> {
                date.setSitterPrinciple("yeet");
            });

            assertThrows(ValidationException.class, () -> {
                date.setSitterPrinciple(null);
            });

            assertThrows(ValidationException.class, () -> {
                date.setStartDate(null);
            });

            assertThrows(ValidationException.class, () -> {
                date.setEndDate(null);
            });
        }
    }
}
