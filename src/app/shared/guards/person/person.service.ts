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

    if (!component.canExit) {
      component.openDialog();
      return false;
    }

    return true;
}