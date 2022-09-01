import { Injectable, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  selectedCategory!: ICategory;
  categories: ICategory[] = [
    { id: 1, name: 'Shaikh', email: 'smp@qualminds.com', phone: 989096 },
    { id: 2, name: 'Mujavviz', email: 'smp@qualminds.com', phone: 996622 },
  ];

  addDetails(category: ICategory) {
    if (!category.id) category.id = this.categories.length + 1;
    this.categories.push(category);
  }
  updateCategory(category: ICategory) {
    this.categories = this.categories.map((categ) => {
      if (categ.id === category.id) {
        return category;
      }
      return categ;
    });
  }
  deleteCategory(category: ICategory) {
    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }
  setData(category: object) {
    localStorage.setItem('userData', JSON.stringify(category));
  }
  getData() {
   let localData= localStorage.getItem('userData')
    if (localData) {
      this.categories = JSON.parse(localData);
    } else {
      this.setData(this.categories);
    }
  }
}
