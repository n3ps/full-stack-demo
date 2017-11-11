import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { PetEditComponent } from './pet-edit.component'
import { DataService } from '../shared/data.service'

describe('PetEditComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PetEditComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        DataService
      ]
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PetEditComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  xit(`should have no error message`, async(() => {
    const fixture = TestBed.createComponent(PetEditComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.errorMessage).toEqual('')
  }))
  
})
