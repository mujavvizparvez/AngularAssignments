import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { ICategory } from '../models/Icategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  @Input() category!: ICategory;
  @Output() categoryUpdated = new EventEmitter<ICategory>();
  @Output() editCategories = new EventEmitter<void>();
  id: any = '';
  name: string = '';
  description: string = '';
  constructor() {}

  ngOnChanges() {
    this.id = this.category.id;
    this.name = this.category.name;
    this.description = this.category?.description;
  }
  onUpdateCategory() {
    let category: ICategory = {
      id: this.id,
      name: this.name,
      description: this.description,
    };
    this.categoryUpdated.emit(category);
    console.log(JSON.stringify(category));
  }
  onGoToTbl() {
    this.editCategories.emit();
  }
}
