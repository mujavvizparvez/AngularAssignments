import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategory } from '../models/Icategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  id: any = '';
  name: string = '';
  description: string = '';
  @Output() categoryAdded = new EventEmitter<ICategory>();
  constructor() {}

  ngOnInit(): void {}
  onAddCategory() {
    let category: ICategory = {
      id: this.id,
      name: this.name,
      description: this.description,
    };
    this.categoryAdded.emit(category);
  }
}
