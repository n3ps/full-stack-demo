package com.petstore.api.service;

import com.petstore.api.models.Pet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PetService {

    private static List<Pet> pets = new ArrayList<>();

    static {
    }

    public List<Pet> getAllPets() {
        return pets;
    }

    public Pet getPetById(long id) {
        for (Pet pet : pets) {
            if (pet.getId() == id) {
                return pet;
            }
        }
        return null;
    }
}
