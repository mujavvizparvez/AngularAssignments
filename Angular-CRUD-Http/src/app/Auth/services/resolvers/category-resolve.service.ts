import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { CategoryService } from 'src/app/Categories/services/category.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryResolveService implements Resolve<any> {
  constructor(private categoryService: CategoryService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.categoryService.getCategories();
  }
}
