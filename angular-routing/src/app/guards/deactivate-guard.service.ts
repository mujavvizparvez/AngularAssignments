import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesComponent } from '../categories/categories.component';

export interface IDeactivate {
  canExit: () => boolean;
}
@Injectable({
  providedIn: 'root',
})
export class DeactivateGuardService
  implements CanDeactivate<IDeactivate>
{
  canDeactivate(
    component: IDeactivate,
    // component: CategoriesComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canExit();
  }
}
