import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPersonComponent } from './new-person/new-person.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'search', component: SearchPersonComponent },
  { path: 'new', component: NewPersonComponent },
  { path: 'edit/:id', component: NewPersonComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}