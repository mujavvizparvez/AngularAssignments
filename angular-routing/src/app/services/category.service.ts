import { Injectable } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //  categories: { id: number; name: string }
  categories: ICategory[] = [
    {
      id: 1,
      name: 'Navneet',
    },
    {
      id: 2,
      name: 'Mohit',
    },
  ];
  getCategories(): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 5000);
    });
  }
}
