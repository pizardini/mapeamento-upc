import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/shared/models/Person.model';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.scss']
})
export class SearchPersonComponent {
  displayedColumns: string[] = ['id', 'name', 'ssd', 'ram', 'net', 'actions'];

  // dataSource: Person[] = [
  //   { id: 1, name: 'Pietro', ssd: true, ram: 4, net: true},
  //   { id: 2, name: 'Letícia', ssd: false, ram: 2, net: true},
  //   { id: 3, name: 'Brenda', ssd: true, ram: 8, net: true},
  //   { id: 4, name: 'Eduardo', ssd: true, ram: 8, net: true},
  //   { id: 5, name: 'Mariana', ssd: false, ram: 8, net: true},
  // ];

  dataSource: Person[] = [];
  
  constructor(private service: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.service.getPeople().subscribe((resp) => {
      console.log(resp);

      this.dataSource = resp;
    })
  }

}
