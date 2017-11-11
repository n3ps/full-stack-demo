package com.petstore.api.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.petstore.api.models.Pet;

@RepositoryRestResource(collectionResourceRel = "pets", path = "pets")
@CrossOrigin(origins = "*")
public interface PetRepository extends CrudRepository<Pet, Long> {
}
