package petfinder.site.common.pet;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Service
public class PetService {
	@Autowired
	private PetDao petDao;

	public Optional<PetDto> findPet(Long id) {
		return petDao.findPet(id);
	}

	public List<PetDto> findPetByPrincipal(String ownerPrincipal) {
		List<Optional<PetDto>> theList = petDao.findPetByPrincipal(ownerPrincipal);
		List<PetDto> dummy = theList.stream().filter(Optional::isPresent).map(Optional::get).collect(Collectors.toList());
		return dummy;
	}

	public void save(PetDto pet) {
		petDao.save(pet);
	}

}