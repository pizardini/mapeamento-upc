import { Person } from '../../shared/models/Person.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit{

  formPerson = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    ssd: new FormControl<boolean | undefined>(undefined, [Validators.required, Validators.min(0)]),
    ram: new FormControl<number | undefined>(undefined),
    net: new FormControl<boolean | undefined>(undefined),
  })

  editMode = false;
  // showPassword = false;
  selectedPerson: Person | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      // console.log(this.route); //para ver todos os parâmetros
      
      if (this.route.routeConfig?.path?.includes("edit")) {
        this.editMode = true;
        let personId: number = this.route.snapshot.params['id'];
        
        this.formPerson.patchValue({

        name: this.selectedPerson?.name,
        ssd: this.selectedPerson?.ssd,
        ram: this.selectedPerson?.ram,
        net: this.selectedPerson?.net
        //  ...person
        // MODO ALTERNATIVO 
        })
      }
  }

  logInfo() {
    console.log(this.formPerson)
  }

  createPerson(): void {

  }

  updatePerson(): void {
    //   if (this.selectedPerson) {
    // const index = this.dataSource.findIndex((value) => value.id === this.selectedPerson!.id);

    // if (index !== -1) {
    //   this.dataSource[index] = {
    //     id: this.selectedPerson!.id,
    //     ...this.formPerson.getRawValue(),
    //     } as Person;
    //   }
    // }
  }
}