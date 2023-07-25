import { Component } from '@angular/core';
import {  CdkDragDrop, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
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
}