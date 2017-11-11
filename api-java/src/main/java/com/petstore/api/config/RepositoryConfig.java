package com.petstore.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

import com.petstore.api.models.Pet;
import com.petstore.api.models.Category;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
 
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(Pet.class);
		config.exposeIdsFor(Category.class);
	}
}