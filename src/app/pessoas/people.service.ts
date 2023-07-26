import { FirestoreModule } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../shared/models/Person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  // private serverUrl = 'api/people';
  private serverUrl = 'http://localhost:3000/people';
  private serverUrl2 = 'http://localhost:3000/people2';

  constructor(private http: HttpClient, private firestore: FirestoreModule) { }

  getPeople2(): Observable<Person[]> {
    return this.http.get<Person[]>(this.serverUrl2)
  }
  
  getPeople(searchValue: string): Observable<Person[]> {
    let httpparams = new HttpParams({fromObject: {search: searchValue}});
    return this.http.get<Person[]>(this.serverUrl, { params: httpparams });
  }

  postPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.serverUrl, person);
  }

  // postPersonFire(person: Person): Promise<void> {
  //   // Use the `add()` method of AngularFirestore to create a new document with auto-generated ID
  //   return this.firestore.collection('people').add(person);
  // }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.serverUrl}/${id}`);
  }

  putPerson(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.serverUrl}/${id}`, person);
  }

  patchPerson() {

  }

  deletePerson(id: number) {
    return this.http.delete<void>(`${this.serverUrl}/${id}`);
  }

  updatePerson(person: Person): Observable<Person> {
    // const url = `${this.serverUrl}/${person.id}`;
    return this.http.put<Person>(`${this.serverUrl}/${person.id}`, person);
  }
}
