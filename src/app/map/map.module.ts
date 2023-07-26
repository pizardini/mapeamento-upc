import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapRoutingModule } from './map-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginRoutingModule } from '../login/login-routing.module';
import { PeopleService } from '../pessoas/people.service';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MapRoutingModule
  ]
})
export class MapModule { }
