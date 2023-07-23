import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../shared/models/Person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private serverUrl = 'api/people';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.serverUrl)
  }

  postPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.serverUrl, person)
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.serverUrl}/${id}`)
  }

  putPerson(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.serverUrl}/${id}`, person)
  }

  patchPerson() {

  }

  deletePerson() {

  }
}
