import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPersonComponent } from './new-person/new-person.component';
import { SearchPersonComponent } from './search-person/search-person.component';

const routes: Routes = [
  { path: 'search', component: SearchPersonComponent },
  { path: 'new', component: NewPersonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}