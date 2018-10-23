package petfinder.site.common.pet;

import alloy.util.Identifiable;
import org.codehaus.jackson.annotate.JsonIgnore;
//import petfinder.site.ValidationException;

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

	public PetDto(Long petId, String ownerPrinciple, String name, String petType, String dogBreed, Double age) throws IllegalArgumentException {
	    setPetId(petId);
	    setOwnerPrinciple(ownerPrinciple);
	    setName(name);
	    setPetType(petType);
	    //setDog(isDog);
	    setAge(age);
	}

	public PetDto(Long petId, String ownerPrinciple, String name, String petType) throws IllegalArgumentException{
        setPetId(petId);
        setOwnerPrinciple(ownerPrinciple);
        setName(name);
        setPetType(petType);
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


    public void setPetId(Long petId) throws IllegalArgumentException{
	    if(petId == null){
	        throw new IllegalArgumentException("setPetId\n was given a null");
        } else if(petId <= 0){ // can add a max later
	        throw new IllegalArgumentException("setPetId\n was given a bad id");
        }
        this.petId = petId;
    }

    public void setOwnerPrinciple(String ownerPrinciple) throws IllegalArgumentException {
        if (ownerPrinciple == null) {
            throw new IllegalArgumentException("setOwnerPrinciple\n was given a null");
        } else if (!ownerPrinciple.matches("^(.+)@(.+)$")) {
            throw new IllegalArgumentException("setOwnerPrinciple\n given incorrect value");
        }
        this.ownerPrincipal = ownerPrinciple;
    }
    public void setId(Long petId) {
        this.petId = petId;
    }

	public void setName(String name) throws IllegalArgumentException {
	    if(name ==  null){
	        throw new IllegalArgumentException("setName\n was given a null");
        }
		this.name = name;
	}

    public void setPetType(String petType) throws IllegalArgumentException{
	    if(petType == null){
	        throw new IllegalArgumentException("setPetType\n was given a null");
        }
        this.petType = petType;
    }



    public void setAge(Double age) throws IllegalArgumentException{
	    if(age == null){
	        throw new IllegalArgumentException("setAge\n was given a null");
        }else if (age < 0){
	        throw new IllegalArgumentException("setAge\n was given a bad value");
        }
        this.age = age;
    }
}