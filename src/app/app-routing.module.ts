import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./pessoas/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'map', component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
