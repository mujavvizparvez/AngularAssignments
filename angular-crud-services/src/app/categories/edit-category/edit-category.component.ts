import { Component, OnInit } from '@angular/core';
import { CategoryComponentEnum } from '../models/category-componenet.enum';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  title = '';
  description = '';
  category: ICategory | null = null;
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.category = this.categoryService.selectedCategory;
    if (this.category) {
      this.title = this.category.title;
      this.description = this.category.description;
    }
  }
  onUpdate() {
    let category = {
      id: this.category?.id,
      title: this.title,
      description: this.description,
    };
    this.categoryService.updateCategory(category);
    this.onBack();
  }
  onBack() {
    this.categoryService.selectedComponentEvent.emit(
      CategoryComponentEnum.categories
    );
  }
}
