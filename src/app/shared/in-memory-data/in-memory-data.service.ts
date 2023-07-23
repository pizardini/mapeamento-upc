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

  // genId(people: Person[]): number {
  //   return people.length > 0 ? Math.max(...people.map((people) => people.id)) + 1 : 11;
  // }

  genId(people: Person[]): number {
    if (people.length === 0) {
      return 11; // Retorna 11 se a lista estiver vazia
    }
  
    let maxId = -Infinity; // Inicializa maxId como o menor número possível
  
    for (const person of people) {
      if (typeof person.id === 'number' && person.id > maxId) {
        maxId = person.id; // Atualiza o maxId se encontrar um ID maior válido
      }
    }
  
    return maxId + 1; // Retorna o novo ID como o maior ID encontrado mais 1
  }
}