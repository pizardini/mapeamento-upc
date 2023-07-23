import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from 'src/app/shared/models/Person.model';
import { Subject, Subscription, debounceTime, filter, take } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.scss']
})
export class SearchPersonComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'ssd', 'ram', 'net', 'actions'];

  dataSource: Person[] = [];

  serviceSub = new Subscription();

  searchControl = new FormControl<string>('');

  subject = new Subject<String>();
  
  constructor(private service: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
    // this.setConfigSubject();
  }

  getPeople(searchValue: string = ''): void {
    this.serviceSub = this.service.getPeople(searchValue).subscribe((resp) => {
      this.dataSource = resp;
    })
  }

  // setConfigSubject(): void {
  //   this.subject
  //   .pipe(debounceTime(1000)).subscribe((searchValue: string) => {
  //     this.getPeople(searchValue);
  //   });
  // }

  searchPeople(searchValue: String): void {
    this.subject.next(searchValue);
  }

  ngOnDestroy(): void {
    this.serviceSub.unsubscribe();
  }

}
