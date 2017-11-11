import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'

import { Pet } from './pet'

export const endpoint = 'http://localhost:8080'

@Injectable()
export class DataService {
  baseUrl =  endpoint + '/pets'

  constructor(private http: HttpClient) { }

  getPets (): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl)
      .map(this.handleJsonHal)
      .catch(this.handleError)
  }

  getPet (id: number): Observable<Pet> {
    return this.http.get<Pet>(this.baseUrl + `/${id}`)
      .catch(this.handleError)
  }

  addPet (pet: Pet) {
    return this.http.post<Pet>(this.baseUrl, pet)
      .catch(this.handleError)
  }

  updatePet (pet: Pet) {
    return this.http.put<Pet>(this.baseUrl + `/${pet.id}`, pet)
      .catch(this.handleError)
  }

  deletePet (id: number) {
    return this.http.delete(this.baseUrl + `/${id}`)
      .catch(this.handleError)
  }

  private handleJsonHal (json) {
    if (json._embedded) {
      return json._embedded[Object.keys(json._embedded)[0]]
    }
    return json
  }

  private handleError (err: HttpErrorResponse) {
    return Observable.throw(err || 'API error')
  }
}
