import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from '../models/Person.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
//   constructor() {}
  createDb() {
    let people: Person[] = [
        { id: 1, name: 'Pietro', ssd: true, ram: 4, net: true},
        { id: 2, name: 'Letícia', ssd: false, ram: 2, net: true},
        { id: 3, name: 'Brenda', ssd: true, ram: 8, net: true},
        { id: 4, name: 'Eduardo', ssd: true, ram: 8, net: true},
        { id: 5, name: 'Mariana', ssd: false, ram: 8, net: true},
    ];

    return { people };
  }

  genId(people: Person[]): number {
    return people.length > 0 ? Math.max(...people.map((people) => people.id)) + 1 : 11;
  }
}