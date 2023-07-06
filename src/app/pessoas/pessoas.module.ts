import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPersonComponent } from './new-person/new-person.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { PeopleRoutingModule } from './people-routing.module';


@NgModule({
  declarations: [
    NewPersonComponent,
    SearchPersonComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PessoasModule { }
