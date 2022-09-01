import { EventEmitter, Injectable, Output } from '@angular/core';
import { CategoryComponentEnum } from '../models/category-componenet.enum';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: ICategory[] = [
    { id: 1, title: 'Category 1', description: 'Category Description ' },
    { id: 2, title: 'Category 2', description: 'Category Description ' },
  ];
  @Output() selectedComponentEvent = new EventEmitter<CategoryComponentEnum>();
  selectedCategory: ICategory | null = null;
 // deletedCategory: ICategory | null = null;
  constructor() {}
  addCategory(category: ICategory) {
    if (!category.id) category.id = this.categories.length + 1;
    this.categories.push(category);
  }
  updateCategory(category: ICategory) {
    this.categories = this.categories.map((categ) => {
      if (categ.id == category.id) {
        return category;
      }
      return categ;
    });
  }
  deleteCategory(category: ICategory) {
    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }
}
