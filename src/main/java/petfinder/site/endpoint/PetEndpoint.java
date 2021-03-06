package petfinder.site.endpoint;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import petfinder.site.common.pet.PetDto;
import petfinder.site.common.pet.PetService;

/**
 * Created by jlutteringer on 8/23/17.
 */
@RestController

@RequestMapping("/api/pet")
public class PetEndpoint {

	@Autowired
	private PetService petService;

	@GetMapping(value = "/{id}", produces = "application/json")
	@ResponseBody
	public Optional<PetDto> getPet(@PathVariable("id") Long id) {
		return petService.findPet(id);
	}

	@GetMapping(value = "/pets/{ownerPrincipal:.+}", produces = "application/json")
	@ResponseBody

	public List<PetDto> getPets(@PathVariable("ownerPrincipal") String ownerPrincipal) {
		return petService.findPetByPrincipal(ownerPrincipal);
	}

	@PostMapping(value = "/add-pet", consumes = "application/json", produces = "application/json")
	@ResponseBody
	public PetDto savePet(@RequestBody PetDto pet) {
		petService.save(pet);
		return pet;
	}
}
