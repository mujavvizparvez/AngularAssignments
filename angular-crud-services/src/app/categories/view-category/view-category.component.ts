import { Component, OnInit } from '@angular/core';
import { CategoryComponentEnum } from '../models/category-componenet.enum';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  category!: ICategory;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    if (this.categoryService.selectedCategory)
      this.category = this.categoryService.selectedCategory;
  }
  onBack() {
    this.categoryService.selectedComponentEvent.emit(CategoryComponentEnum.categories)
  }
}
