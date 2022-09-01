import { Component, Input, OnInit } from '@angular/core';
import { CategoryComponentEnum } from '../models/category-componenet.enum';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  @Input() category!: ICategory;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
  onViewCategory() {
    this.categoryService.selectedCategory = this.category;
    this.categoryService.selectedComponentEvent.emit(
      CategoryComponentEnum.viewCategory
    );
  }
  onEditCategory() {
    this.categoryService.selectedCategory = this.category;
    this.categoryService.selectedComponentEvent.emit(
      CategoryComponentEnum.editCategory
    );
  }
  onDeleteCategory() {
    let confirmAction = confirm('Do you want to delete this?');
    if (confirmAction) {
      this.categoryService.deleteCategory(this.category);
      this.categoryService.selectedComponentEvent.emit(
        CategoryComponentEnum.categories
      );
    }
  }
}
