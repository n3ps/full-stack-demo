import { TestBed, inject } from '@angular/core/testing'
import { DataService } from './data.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('DataService', () => {
  const endpoint = 'https://localhost:8080/pets'
  const response = {}

  let service: DataService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    })

    service = TestBed.get(DataService)
    httpMock = TestBed.get(HttpTestingController)
  })

  xit('should successfully mock request', () => {
    service.getPets()
      .subscribe(data => {})

    httpMock
      .expectOne(endpoint)
      .flush(response)

    httpMock.verify()
  })
})
