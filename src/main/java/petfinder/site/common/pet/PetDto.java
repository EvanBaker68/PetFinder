package petfinder.site.common.pet;

import alloy.util.Identifiable;

public class PetDto implements Identifiable {
    private Long id;
    private String ownerPrincipal;
    private String name;
    private String petType;
    //private Boolean isDog;
    private String dogBreed;
    private Double age;

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    private Boolean isDeleted = false;


    public PetDto() {}

    public PetDto(Long id, String ownerPrincipal, String name, String petType, String dogBreed, Double age) throws IllegalArgumentException{
        setId(id);
        setOwnerPrincipal(ownerPrincipal);
        setName(name);
        setPetType(petType);
        //setDog(isDog);
        setDogBreed(dogBreed);
        setAge(age);
    }

    public PetDto(Long id, String ownerPrincipal, String name, String petType) throws IllegalArgumentException{
        setId(id);
        setOwnerPrincipal(ownerPrincipal);
        setName(name);
        setPetType(petType);
    }

    @Override
    public Long getId() {
        return id;
    }

    public String getOwnerPrincipal() {
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


    public void setId(Long id) throws IllegalArgumentException{

        this.id = id;
    }

    public void setOwnerPrincipal(String ownerPrincipal) throws IllegalArgumentException{

        this.ownerPrincipal = ownerPrincipal;
    }

    public void setName(String name) throws IllegalArgumentException{
        if(name == null){
            throw new IllegalArgumentException("setName\t was given a null");
        }
        this.name = name;
    }

    public void setPetType(String petType) throws IllegalArgumentException{
        if(petType == null){
            throw new IllegalArgumentException("setPetType\t given a bad value");
        }
        this.petType = petType;
    }

    //public void setDog(Boolean dog) {
    // isDog = dog;
    //}
    public void setDogBreed(String dogBreed) throws IllegalArgumentException{
        if(dogBreed == null){
            throw new IllegalArgumentException("setDogBread\t was given a null");
        }
        this.dogBreed = dogBreed;
    }

    public void setAge(Double age) throws IllegalArgumentException{
        if(age == null){
            throw new IllegalArgumentException("setAge\t was given a null");
        } else if(age < 0L){
            throw new IllegalArgumentException("setAge\t was given an invalid value");
        }
        this.age = age;
    }
}
