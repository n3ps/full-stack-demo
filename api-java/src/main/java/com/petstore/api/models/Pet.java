package com.petstore.api.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Pet {

    @Id
    @GeneratedValue()
    private Long id;
    private String name;
    private String photourl;
    private String status;    
    // @ManyToOne
    // private Category category;
    private Long categoryId;

    public Pet() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    };

    public void setName(String name) { 
        this.name = name; 
    }

    public String getPhotoUrl() {
        return photourl;
    }

    public void setPhotoUrl(String photoUrl) { 
        this.photourl = photoUrl; 
    }

    // public Category getCategory() {
    //     return category;
    // }

    // public void setCategory(Category category) {
    //     this.category = category;
    // }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCatgoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
