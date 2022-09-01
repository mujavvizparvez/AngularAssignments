import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../models/Icategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  @Input() categories: ICategory[] | null = null;
  @Output() categoryViewed = new EventEmitter<ICategory>();
  @Output() categoryEdited = new EventEmitter<ICategory>();
  @Output() categoryDeleted = new EventEmitter<ICategory>();
  constructor() {}
  hideTable = true;
  ngOnInit(): void {}
  onCategoryView(category: ICategory) {
    this.categoryViewed.emit(category);
  }
  onEditCategory(category: ICategory) {
    this.categoryEdited.emit(category);
  }
  onDeleteCategory(category: ICategory) {
    let confirmAction = confirm('Do you want to delete this?');
    if (confirmAction) {
      this.categoryDeleted.emit(category);
      // alert('Action successfully executed');
      // } else {
      //   alert('Action canceled');
    }
  }

  //  console.log('delete working');
}
