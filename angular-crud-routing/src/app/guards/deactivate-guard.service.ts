import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuardService
  implements CanDeactivate<UserEditComponent>
{
  canDeactivate(
    component: UserEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ): any {
    return component.showMethod();
  }
}
