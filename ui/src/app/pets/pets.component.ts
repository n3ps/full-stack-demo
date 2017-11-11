import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import { Pet } from '../shared/pet'
import { DataService, endpoint } from '../shared/data.service'
import { categories } from '../shared/data'

@Component({
  templateUrl: './pets.component.html'
})
export class PetsComponent implements OnInit {

  pets: Pet[]
  errorMessage: string

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit () {
    this.dataService.getPets()
      .subscribe(pets => this.pets = pets, err => this.handleError(err))
  }

  addPet () {
    this.router.navigateByUrl('/new')
  }

  handleError (err: HttpErrorResponse) {
    this.errorMessage = err.status === 0 ? `Can't connect to the server` : err.message
  }

  getCategory (id: number) {
    const category = categories.find(c => c.id === String(id))
    return category ? category.name : ''
  }

  statusClass (status: string) {
    const modifiers = {
      available: 'success',
      pending: 'warning',
      sold: 'danger'
    }

    return `badge badge-${modifiers[status]}`
  }

  renderUrl (url: string) {
    return url.startsWith('/') ? endpoint + url : url
  }

}
