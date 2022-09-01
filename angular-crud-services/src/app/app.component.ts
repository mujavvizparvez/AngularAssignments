import { Component } from '@angular/core';
import { CategoryComponentEnum } from './categories/models/category-componenet.enum';
import { CategoryService } from './categories/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crud-services';
  //selectedComponent = 'categories';
  selectedComponent = CategoryComponentEnum.categories;

  constructor(private categoryService: CategoryService) { }
  ngOnInit() {
    this.categoryService.selectedComponentEvent.subscribe((data)=>{
      this.selectedComponent = data;
    })
  }
  onAddCategory() {
    this.selectedComponent = CategoryComponentEnum.addCategory;
  }
  // onCategoryAdd() {
  //   this.selectedComponent = 'categories';
  // }
}
