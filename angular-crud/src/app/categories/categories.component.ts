import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/Icategory';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [
    { id: 1, name: 'Shaikh', description: 'Category Description' },
  ];
  viewedCategory: ICategory | null = null;
  editCategory!: ICategory;
  showComponent = 'Categories Table';

  constructor() {}

  ngOnInit(): void {}

  onShowInput() {
    this.showComponent = 'Add Category';
  }

  onCategoryAdd(category: ICategory) {
    category.id = this.categories.length + 1;
    this.categories.push(category);
    this.showComponent = 'Categories Table';
  }

  onCategoryViewed(category: ICategory) {
    this.viewedCategory = category;
    this.showComponent = 'View Category';
  }

  onCategoryEdited(category: ICategory) {
    this.editCategory = category;
    this.viewedCategory = null;
    this.showComponent = 'Edit Category';
  }
  onUpdateCategory(category: ICategory) {
    this.categories = this.categories.map((categ) => {
      if (category.id == categ.id) {
        return category;
      }
      return categ;
    });
    this.showComponent = 'Categories Table';
  }
  onCategoryDeleted(category: ICategory) {
    console.log(category);
    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }

  OnShowCategories() {
    this.showComponent = 'Categories Table';
  }
  onEditCategory() {
    this.showComponent = 'Categories Table';
  }
}
