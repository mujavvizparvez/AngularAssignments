import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CategoryComponentEnum } from '../categories/models/category-componenet.enum';
import { CategoryService } from '../categories/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  // @Output() categoryAdded = new EventEmitter<void>();
  title = '';
  description = '';
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
  onAddCategory() {
    let category = {
      title: this.title,
      description: this.description,
    };
    this.categoryService.addCategory(category);
    this.categoryService.selectedComponentEvent.emit(
      CategoryComponentEnum.categories
    );
    //this.categoryAdded.emit();
  }
  onBack() {
    this.categoryService.selectedComponentEvent.emit(
      CategoryComponentEnum.categories
    );
  }
}
