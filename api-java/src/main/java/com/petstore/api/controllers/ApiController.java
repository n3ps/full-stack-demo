package com.petstore.api.controllers;

import java.util.List;

import com.petstore.api.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.petstore.api.models.Pet;

@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "*")
public class ApiController {

    @Autowired
    private PetService petService;

    @GetMapping("pets")
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @GetMapping("pets/{id}")
    public Pet getPetById(@PathVariable long id) {
        return petService.getPetById(id);
    }
    
    // Create

    // Delete
}
