import { Person } from '../../shared/models/Person.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeopleService } from '../people.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogExitPageComponent } from 'src/app/shared/components/dialog-exit-page/dialog-exit-page.component';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit{

  formPerson = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    ssd: new FormControl<boolean>(false, [Validators.required, Validators.min(0)]),
    ram: new FormControl<number>(0),
    net: new FormControl<boolean>(false),
    row: new FormControl<number>(0, Validators.min(1))
  })

  personId!: number;
  editMode = false;
  selectedPerson: Person | undefined;
  canExit = false;

  serviceSub = new Subscription();

  constructor(
    private route: ActivatedRoute, 
    private service: PeopleService, 
    private toastService: ToastrService, 
    private router: Router,
    private dialog: MatDialog) {}

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
        ...person
      });
  }

  createPerson(): void {
    this.serviceSub = this.service
    .postPerson(this.formPerson.getRawValue())
    .subscribe({
      next: (resp: Person) => {
        this.redirectAndShowToast();
        this.canExit = true;
      },
      error: (error: HttpErrorResponse) => {
        this.showError();
      }
    });
  }

  updatePerson(): void {
    this.serviceSub = this.service
      .putPerson(this.personId, this.formPerson.getRawValue())
      .subscribe({
        next: (resp) => {
          this.redirectAndShowToast(resp.name);
          this.canExit = true;
        },
        error: (error: HttpErrorResponse) => {
          this.showError();
        },
      });
  }

  showError(): void {
    this.toastService.error(
      'Erro!',
      'Não foi possível atualizar!'
    );
  }

  redirectAndShowToast(name?: string): void {
    let message = 'Pessoa cadastrada';

    if (name) {
      message = `Pessoa ${name} atualizada!`;
    }

    this.router.navigate(['/people/search']).then((value) => {
      if (value) {
        this.toastService.success('Sucesso!', message);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExitPageComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);

      if (result) {
        this.canExit = true;
        this.router.navigate(['/'])
      } else {

      }
    });
  }
}
