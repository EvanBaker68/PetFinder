package petfinder.site.common.pet;

import alloy.util.Identifiable;

public class PetDto implements Identifiable {
	private Long petId;
	private Long ownerPrinciple;
	private String name;
	private String petType;
	private Boolean isDog;
	private String dogBreed;
	private Double age;

	public PetDto(Long petId, Long ownerPrinciple, String name, String petType, Boolean isDog, String dogBreed, Double age) {
	    setPetId(petId);
	    setOwnerPrinciple(ownerPrinciple);
	    setName(name);
	    setPetType(petType);
	    setDog(isDog);
	    setDogBreed(dogBreed);
	    setAge(age);
	}

	@Override
    public Long getId() {
        return petId;
    }

    public Long getOwnerPrinciple() {
        return ownerPrinciple;
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


    public void setPetId(Long petId) {
        this.petId = petId;
    }

    public void setOwnerPrinciple(Long ownerPrinciple) {
        this.setOwnerPrinciple(ownerPrinciple);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPetType(String petType) {
        this.petType = petType;
    }

    public void setDog(Boolean dog) {
        isDog = dog;
    }

    public void setDogBreed(String dogBreed) {
        this.dogBreed = dogBreed;
    }

    public void setAge(Double age) {
        this.age = age;
    }
}