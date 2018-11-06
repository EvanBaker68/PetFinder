package petfinder.site.endpoint;

import java.util.List;
import java.util.Optional;

import java.util.logging.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import petfinder.site.common.pet.PetDto;
import petfinder.site.common.pet.PetService;

/**
 * Created by jlutteringer on 8/23/17.
 */
@RestController

@RequestMapping("/pet")
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
	public List<Optional<PetDto>> getPets(@PathVariable("ownerPrincipal") String ownerPrincipal) {
		/*
		if (ownerPrincipal.equals(SecurityContextHolder.getContext().getAuthentication().getName())) {
			return petService.findPetByPrincipal(ownerPrincipal);
		}
		else {
			Optional<PetDto> returnVal = Optional.empty();
			List<Optional<PetDto>> returnList = new List<Optional<PetDto>>;
			returnList.add(returnVal);

			return returnList;
		}*/
		return petService.findPetByPrincipal(ownerPrincipal);
	}


	@PostMapping(value = "/add-pet", consumes = "application/json", produces = "application/json")
	@ResponseBody
	public PetDto savePet(@RequestBody PetDto pet) {
		System.out.println("made it to endpoint");
		System.out.println(pet.getAge());
		System.out.println(pet.getName());
		System.out.println(pet.getOwnerPrincipal());
		System.out.println(pet.getId());
		petService.save(pet);
		return pet;
	}
}
