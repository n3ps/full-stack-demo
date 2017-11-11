import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { routes } from './app-routes'
import { AppComponent } from './app.component'
import { DataService } from './shared/data.service'
import { IdGuardService } from './pet-edit/id-guard.service'
import { PetsComponent } from './pets/pets.component'
import { PetEditComponent } from './pet-edit/pet-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    IdGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
