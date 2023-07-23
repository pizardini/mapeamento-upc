import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from 'src/app/shared/models/Person.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.scss']
})
export class SearchPersonComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'ssd', 'ram', 'net', 'actions'];

  dataSource: Person[] = [];

  serviceSub = new Subscription();
  
  constructor(private service: PeopleService) {}

  ngOnInit(): void {
    this.serviceSub = this.service.getPeople().subscribe((resp) => {
      this.dataSource = resp;
    })
  }

  ngOnDestroy(): void {
    this.serviceSub.unsubscribe();
  }

}
