import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../models/Icategory';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  @Input() category: ICategory | null = null;
  @Output() showCategories = new EventEmitter<void>();
  // goToTable = true;

  constructor() {}

  ngOnInit(): void {}

  onBackToTbl() {
    this.showCategories.emit();
  }
}
