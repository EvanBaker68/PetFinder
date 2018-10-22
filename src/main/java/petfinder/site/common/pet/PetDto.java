package petfinder.site.common.pet;

import alloy.util.Identifiable;

public class PetDto implements Identifiable {
	private Long petId;
	private String ownerPrincipal;
	private String name;
	private String petType;
	//private Boolean isDog;
	private String dogBreed;
	private Double age;
	private Boolean isDeleted;

	public PetDto() {}

	public PetDto(Long petId, String ownerPrincipal, String name, String petType, String dogBreed, Double age) {
	    setId(petId);
	    setownerPrincipal(ownerPrincipal);
	    setName(name);
	    setPetType(petType);
	    //setDog(isDog);
	    setDogBreed(dogBreed);
	    setAge(age);
	}

	@Override
    public Long getId() {
        return petId;
    }

    public String getownerPrincipal() {
        return ownerPrincipal;
    }

    public String getName() {
        return name;
    }

    public String getPetType() {
        return petType;
    }

    //public Boolean getDog() {
    //    return isDog;
    //}

    public String getDogBreed() {
        return dogBreed;
    }

    public Double getAge() {
        return age;
    }


    public void setId(Long petId) {
        this.petId = petId;
    }

    public void setownerPrincipal(String ownerPrincipal) {
        this.ownerPrincipal = ownerPrincipal;
    }

	public void setName(String name) {
		this.name = name;
	}

    public void setPetType(String petType) {
        this.petType = petType;
    }

    //public void setDog(Boolean dog) {
       // isDog = dog;
    //}
    public void setDogBreed(String dogBreed) {
        this.dogBreed = dogBreed;
    }

    public void setAge(Double age) {
        this.age = age;
    }
}