/*package petfinder.site.test.unit;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import petfinder.site.common.date.DateDto;
import static org.junit.jupiter.api.Assertions.*;
public class DateTest {

    @Nested
    class TestBasicDate {
        @Test
        @DisplayName("Test constructor equals and null")
        void testConstructor() throws IllegalArgumentException {
            DateDto date = new DateDto("1/1/17", "1/8/17", "drewb97@gmail.com");
            assertNotNull(date);
        }

        @Test
        @DisplayName("Test Getters")
        void testGetters() throws IllegalArgumentException {
            DateDto date = new DateDto("1/1/17", "1/8/17", "drewb97@gmail.com");
            assertAll(
                    () -> assertEquals("1/1/17", date.getStartDate()),
                    () -> assertEquals("1/8/17", date.getEndDate()),
                    () -> assertEquals("drewb97@gmail.com", date.getSitterPrinciple())
            );
        }

        @Test
        @DisplayName("Test Setters")
        void testSetters() throws IllegalArgumentException {
            DateDto date = new DateDto();
            assertThrows(IllegalArgumentException.class, () -> {
                date.setSitterPrinciple("yeet");
            });

            assertThrows(IllegalArgumentException.class, () -> {
                date.setSitterPrinciple(null);
            });

            assertThrows(IllegalArgumentException.class, () -> {
                date.setStartDate(null);
            });

            assertThrows(IllegalArgumentException.class, () -> {
                date.setEndDate(null);
            });
        }
    }
}
*/