import { Person } from '../../shared/models/Person.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeopleService } from '../people.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit{

  formPerson = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    ssd: new FormControl<boolean>(false, [Validators.required, Validators.min(0)]),
    ram: new FormControl<number | undefined>(undefined),
    net: new FormControl<boolean>(false),
  })

  personId!: number;
  editMode = false;
  // showPassword = false;
  selectedPerson: Person | undefined;

  serviceSub = new Subscription();

  constructor(private route: ActivatedRoute, private service: PeopleService, private toastService: ToastrService) {}

  ngOnInit(): void {     
    this.verifyRoute();
  }

  verifyRoute(): void {
    if (this.route.routeConfig?.path?.includes("edit")) {
      this.editMode = true;
      this.personId = this.route.snapshot.params['id'];
      this.getPersonById();
    }
  }

  getPersonById(): void {
    this.serviceSub = this.service.getPersonById(this.personId).subscribe((resp) => {
      this.fillForm(resp);
    });
  }

  fillForm(person: Person): void {
    this.formPerson.patchValue({
      name: person.name,
      ssd: person.ssd,
      ram: person.ram,
      net: person.net,
      });
  }

  createPerson(): void {

  }

  updatePerson(): void {
    this.serviceSub = this.service.putPerson(this.personId, this.formPerson.getRawValue())
    .subscribe(resp => {this.toastService.success('Sucesso!', `Pessoa ${resp.name} atualizada!` )
    });
  }
}