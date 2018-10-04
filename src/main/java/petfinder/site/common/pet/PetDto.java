package petfinder.site.common.pet;

import alloy.util.Identifiable;

/**
 * Created by jlutteringer on 8/23/17.
 */
public class PetDto implements Identifiable {
	private Long petID;
	private Long ownerID;
	private String name;
	private String petType;
	private Boolean isDog;
	private String dogBreed;
	private Double age;

	public PetDto(Long petID, Long ownerID, String name, String petType, Boolean isDog, String dogBreed, Double age) {
		this.petID = petID;
		this.ownerID = ownerID;
		this.name = name;
		this.petType = petType;
		this.isDog = isDog;
		this.dogBreed = dogBreed;
		this.age = age;
	}

	@Override
    public Long getId() {
        return petID;
    }

    public Long getOwnerID() {
        return ownerID;
    }

    public String getName() {
        return name;
    }

    public String getPetType() {
        return petType;
    }

    public Boolean getDog() {
        return isDog;
    }

    public String getDogBreed() {
        return dogBreed;
    }

    public Double getAge() {
        return age;
    }
}