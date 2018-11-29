package petfinder.site.test.unit;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import petfinder.site.common.date.DateDto;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
public class DateTest {

    @Nested
    class TestBasicDate {
        @Test
        @DisplayName("Test constructor equals and null")
        void testConstructor() throws IllegalArgumentException, ParseException {
            Date date = new SimpleDateFormat("dd/MM/yyyy").parse("11/11/2017");
            DateDto datee = new DateDto(date, date, "drewb97@gmail.com");
            assertNotNull(datee);
        }


        @Test
        @DisplayName("Test Setters")
        void testSetters() throws IllegalArgumentException {
            DateDto date = new DateDto();
            assertThrows(IllegalArgumentException.class, () -> {
                date.setSitterPrincipal("yeet");
            });

            assertThrows(IllegalArgumentException.class, () -> {
                date.setSitterPrincipal(null);
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
