package petfinder.site.test.functional.sitterTest;

import petfinder.site.common.sitter.SitterDto;
import petfinder.site.common.sitter.SitterService;

import java.util.ArrayList;

public class MockSitterService extends SitterService {
    private ArrayList<SitterDto> sitters;

    MockSitterService() {
        sitters = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            sitters.add(new SitterDto("sitter" + i, Math.random() % 120));
        }
    }

    public void setSitters(ArrayList<SitterDto> sitters) {
        this.sitters = sitters;
    }

    public ArrayList<SitterDto> getSitters() {
        return sitters;
    }
}
