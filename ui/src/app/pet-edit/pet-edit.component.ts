import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Location } from '@angular/common'

import { DataService } from '../shared/data.service'
import { Pet, Category } from '../shared/pet'
import { categories } from '../shared/data'

@Component({
  templateUrl: './pet-edit.component.html'
})
export class PetEditComponent implements OnInit {

  pet: Pet
  petForm: FormGroup
  formTitle: string
  categories = categories
  errorMessage: string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      id: 0,
      name: '',
      categoryId: '',
      photoUrl: '',
      tags: [],
      status: 'available'
    })

    const id = +this.route.snapshot.paramMap.get('id')
    if (id) {
      this.dataService.getPet(id)
        .subscribe(pet => this.populateForm(pet))

      this.formTitle = 'Edit Pet'
    } else {
      this.formTitle = 'Add Pet'
    }
  }

  populateForm (pet: Pet) {
    this.pet = pet

    this.petForm.patchValue({
      id: this.pet.id,
      name: this.pet.name,
      categoryId: this.pet.categoryId,
      photoUrl: this.pet.photoUrl,
      status: this.pet.status
    })
  }

  save (fields: Pet) {
    const pet = Object.assign({}, this.pet, fields)

    if (fields.id) {
      this.dataService.updatePet(pet)
        .subscribe(() => this.navigateHome(), err => this.handleError(err))
    } else {
      this.dataService.addPet(pet)
        .subscribe(() => this.navigateHome(), err => this.handleError(err))
    }
  }

  cancel () {
    this.location.back()
  }

  delete (pet: Pet) {
    this.dataService.deletePet(pet.id)
      .subscribe(() => this.navigateHome())
  }

  private handleError (err) {
    this.errorMessage = err.status === 0 ? `Can't connect to the server` : err.message
  }

  private navigateHome () {
    this.router.navigate(['/'])
  }

}
