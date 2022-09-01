import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../models/ICategory';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  // providers: [CategoryService],
})
export class UserTableComponent implements OnInit {
  @Input() categories!: ICategory[];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.categoryService.categories;
    // if (!this.authService.isAuthenticated()) {
    //   this.router.navigate(['/']);
    // }

  }
  onAddDetails() {
    this.router.navigate(['/add-details']);
  }
  onEdit(category: ICategory) {
    this.categoryService.selectedCategory = category;
    this.router.navigate(['/user-edit']);
  }
  onDelete(category: ICategory) {
    let confirmAction = confirm('Do you want to delete this?');
    if (confirmAction) {
      this.categoryService.deleteCategory(category);
    }
  }
}
