package petfinder.site.common.pet;

import alloy.util.Identifiable;
import org.codehaus.jackson.annotate.JsonIgnore;

public class PetDto implements Identifiable {
	private Long petId;
	private String ownerPrinciple;
	private String name;
	private String petType;
	//private Boolean isDog;
	private String dogBreed;
	private Double age;

	public PetDto() {}

	public PetDto(Long petId, String ownerPrinciple, String name, String petType, String dogBreed, Double age) {
	    setPetId(petId);
	    setOwnerPrinciple(ownerPrinciple);
	    setName(name);
	    setPetType(petType);
	    //setDog(isDog);
	    setAge(age);
	}

	@Override
    public Long getId() {
        return petId;
    }

    public String getOwnerPrinciple() {
        return ownerPrinciple;
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


    public void setPetId(Long petId) {
        this.petId = petId;
    }

    public void setOwnerPrinciple(String ownerPrinciple) {
        this.ownerPrinciple = ownerPrinciple;
    }

	public void setName(String name) {
		this.name = name;
	}

    public void setPetType(String petType) {
        this.petType = petType;
    }



    public void setAge(Double age) {
        this.age = age;
    }
}