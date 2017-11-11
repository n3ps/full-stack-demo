import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { PetsComponent } from './pets.component'
import { DataService } from '../shared/data.service'

describe('PetsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PetsComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ]
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PetsComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  xit(`should have no error message`, async(() => {
    const fixture = TestBed.createComponent(PetsComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.errorMessage).toEqual('')
  }))

  xit('should render title in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(PetsComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h3').textContent).toContain('Pets available')
  }))
})
