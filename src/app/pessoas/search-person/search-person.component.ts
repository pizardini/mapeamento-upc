import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from 'src/app/shared/models/Person.model';
import { Subject, Subscription, debounceTime, filter, take } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

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

  subject = new Subject<string>();
  
  constructor(private service: PeopleService, private toastService: ToastrService) {}

  ngOnInit(): void {
    this.getPeople();
    this.setConfigSubject();
  }

  getPeople(searchValue: string = ''): void {
    this.serviceSub = this.service.getPeople(searchValue).subscribe((resp) => {
      this.dataSource = resp;
    })
  }

  setConfigSubject(): void {
    this.subject
    .pipe(debounceTime(1000),
    filter((value) => value.length >= 3 || value == '')).subscribe((searchValue: string) => {
      this.getPeople(searchValue);
    });
  }

  searchPeople(searchValue: string): void {
    this.subject.next(searchValue);
  }

  ngOnDestroy(): void {
    this.serviceSub.unsubscribe();
  }

  deletePerson(id: number): void {
    this.service.deletePerson(id).pipe(take(1)).subscribe(() => {
      this.toastService.success("Sucesso!", "Pessoa removida");
      this.getPeople(this.searchControl.value);
    })
  }
}
