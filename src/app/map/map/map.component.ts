import { Component, OnInit } from '@angular/core';
import {  CdkDragDrop, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { PeopleService } from 'src/app/pessoas/people.service';
import { Person } from 'src/app/shared/models/Person.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit{

  constructor(private service: PeopleService) {}

  serviceSub = new Subscription();

  coluna1: Person[];

  coluna2: Person[];

  coluna3: Person[];

  coluna4: Person[];

  drop(event: CdkDragDrop<Person[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.serviceSub = this.service.getPeople2().subscribe((resp) => {

      const sortedColumns = this.sortPeopleInColumns(resp);
      this.coluna1 = sortedColumns.coluna1;
      this.coluna2 = sortedColumns.coluna2;
      this.coluna3 = sortedColumns.coluna3;
      this.coluna4 = sortedColumns.coluna4;
    });
  }

  sortPeopleInColumns(people: Person[]): { coluna1: Person[], coluna2: Person[], coluna3: Person[], coluna4: Person[] } {
    const sortedColumns = {
      coluna1: [] as Person[],
      coluna2: [] as Person[],
      coluna3: [] as Person[],
      coluna4: [] as Person[]
    };
  
    people.forEach(person => {
      const row = person.row;
      if (row == 1) {
        sortedColumns.coluna1.push(person);
      } else if (row == 2) {
        sortedColumns.coluna2.push(person);
      } else if (row == 3) {
        sortedColumns.coluna3.push(person);
      } else if (row == 4) {
        sortedColumns.coluna4.push(person);
      }
    });
  
    return sortedColumns;
  }

  putPersonupdatePersonRow(person: Person): void {
    this.serviceSub = this.service.updatePerson(person).subscribe(
      () => {
        console.log(`Updated row for person ${person.id}`);
      },
      (error) => {
        console.error(`Error updating row for person ${person.id}:`, error);
      }
    );
  }
}



