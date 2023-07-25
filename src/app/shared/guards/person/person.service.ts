import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPersonComponent } from 'src/app/pessoas/new-person/new-person.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const PersonGuard: CanDeactivateFn<NewPersonComponent> = (
  component: NewPersonComponent 
) => {

    if (component.formPerson.touched) {
      return false;
    }

    return true;
  //   if (component.canDeactivate()) {
  //     console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - allowed`);
  //     return true;
  //   } else {
  //     console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - not allowed`);
  //     return false;
  // }
}