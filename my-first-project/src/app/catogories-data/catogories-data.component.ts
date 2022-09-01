import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/ICategory';
@Component({
  selector: 'app-catogories-data',
  templateUrl: './catogories-data.component.html',
  styleUrls: ['./catogories-data.component.css'],
})
export class CatogoriesDataComponent implements OnInit {
  categories: ICategory[] = [
    { id: 1, categoryName: 'category 1' },
    { id: 2, categoryName: 'category 2' },
    { id: 3, categoryName: 'category 3' },
  ];
  constructor() {}

  ngOnInit(): void {}
  // onAddCategory() {
  //   // this.categories.push({
  //   //   id: this.categories.length + 1,
  //   //   categoryName: `category ${this.categories.length}`,
  //   // });
  //   this.categories = [
  //     { id: 1, categoryName: 'category 1' },
  //     { id: 2, categoryName: 'category 2' },
  //     { id: 3, categoryName: 'category 3' },
  //     { id: 4, categoryName: 'category 4' },
  //   ];
  // }
  onAddCategory() {
    let categories = this.categories.map((category) => {
      return { ...category };
    });
    categories.push({
      id: categories.length + 1,
      categoryName: `category ${categories.length + 1}`,
    });
    console.log(categories);
    this.categories = categories;
  }
  trackUser(index: number, category: ICategory) {
    return category ? category.id : undefined;
  }
}
