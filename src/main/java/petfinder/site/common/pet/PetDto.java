package petfinder.site.common.pet;

import alloy.util.Identifiable;
import org.codehaus.jackson.annotate.JsonIgnore;
import petfinder.site.ValidationException;

public class PetDto implements Identifiable {
	private Long petId;
	private String ownerPrinciple;
	private String name;
	private String petType;
	//private Boolean isDog;
	private String dogBreed;
	private Double age;

	public PetDto() {}

	public PetDto(Long petId, String ownerPrinciple, String name, String petType, String dogBreed, Double age) throws ValidationException {
	    setPetId(petId);
	    setOwnerPrinciple(ownerPrinciple);
	    setName(name);
	    setPetType(petType);
	    //setDog(isDog);
	    setAge(age);
	}

	public PetDto(Long petId, String ownerPrinciple, String name, String petType) throws ValidationException {
        setPetId(petId);
        setOwnerPrinciple(ownerPrinciple);
        setName(name);
        setPetType(petType);
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


    public void setPetId(Long petId) throws ValidationException{
	    if(petId == null){
	        throw new ValidationException("setPetId", "was given a null");
        } else if(petId <= 0){ // can add a max later
	        throw new ValidationException("setPetId", "was given a bad id");
        }
        this.petId = petId;
    }

    public void setOwnerPrinciple(String ownerPrinciple) throws ValidationException {
        if(ownerPrinciple == null){
            throw new ValidationException("setOwnerPrinciple", "was given a null");
        } else if(!ownerPrinciple.matches("^(.+)@(.+)$")){
            throw new ValidationException("setOwnerPrinciple", "given incorrect value");
        }
	    this.ownerPrinciple = ownerPrinciple;
    }

	public void setName(String name) throws ValidationException {
	    if(name ==  null){
	        throw new ValidationException("setName", "was given a null");
        }
		this.name = name;
	}

    public void setPetType(String petType) throws ValidationException{
	    if(petType == null){
	        throw new ValidationException("setPetType", "was given a null");
        }
        this.petType = petType;
    }



    public void setAge(Double age) throws ValidationException{
	    if(age == null){
	        throw new ValidationException("setAge", "was given a null");
        }else if (age < 0){
	        throw new ValidationException("setAge", "was given a bad value");
        }
        this.age = age;
    }
}