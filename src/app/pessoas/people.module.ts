import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPersonComponent } from './new-person/new-person.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { PeopleRoutingModule } from './people-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    NewPersonComponent,
    SearchPersonComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatTableModule, 
    MatButtonModule, 
    MatIconModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
  ]
})
export class PeopleModule { }
