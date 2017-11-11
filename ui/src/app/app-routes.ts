import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'

import { PetsComponent } from './pets/pets.component'
import { PetEditComponent } from './pet-edit/pet-edit.component'
import { IdGuardService } from './pet-edit/id-guard.service'

export const routes: Routes = [
  { path: '', component: PetsComponent},
  { path: 'edit/:id', canActivate: [IdGuardService], component: PetEditComponent},
  { path: 'new', component: PetEditComponent}
]
