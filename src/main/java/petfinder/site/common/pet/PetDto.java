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
    private Boolean isDeleted = false;


    public PetDto() {}

    public PetDto(Long id, String ownerPrincipal, String name, String petType, String dogBreed, Double age) {
        setId(id);
        setOwnerPrincipal(ownerPrincipal);
        setName(name);
        setPetType(petType);
        //setDog(isDog);
        setDogBreed(dogBreed);
        setAge(age);
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


    public void setId(Long id) {
        this.id = id;
    }

    public void setOwnerPrincipal(String ownerPrincipal) {
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
