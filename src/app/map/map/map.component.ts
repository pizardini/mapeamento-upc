import { Component } from '@angular/core';
import {  CdkDragDrop, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { PeopleService } from 'src/app/pessoas/people.service';
import { Person } from 'src/app/shared/models/Person.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  constructor(private service: PeopleService) {}

  serviceSub = new Subscription();

  dataSource: Person[] = [];

  coluna1 = ['Letícia S.', 'Aline', 'Lorena', 'Vinícius', 'Priscila', 'Letícia B.', 'Pedro', 'Milena', 'Luana', 'Vazio'];

  coluna2 = ['Bruna', 'Izabela', 'Fernanda', 'Ana Paula', 'Vazio', 'Vazio', 'Amanda', 'Daiane', 'Brenda', 'Pietro'];

  coluna3 = ['Pâmela', 'Giovana', 'Letícia', 'Angelo', 'Jéssica', 'Matheus', 'Luciana', 'Gabriella', 'Rafael', 'Vazio'];

  coluna4 = ['Guilherme', 'Pessoa 2', 'Jhienifer', 'Patricia', 'Brendon', 'Julia', 'Vazio', 'Aline', 'Vazio', 'Vazio'];

  drop(event: CdkDragDrop<string[]>) {
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
    this.serviceSub = this.service.getPeople2().subscribe((resp) => {
      this.dataSource = resp;
    });
  }
}