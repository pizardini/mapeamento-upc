import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../shared/models/Person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private serverUrl = 'http:localhost:300/people';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.serverUrl)
  }

  postPerson() {

  }

  putPerson() {

  }

  patchPerson() {

  }

  deletePerson() {

  }
}
