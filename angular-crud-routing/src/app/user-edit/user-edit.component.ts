import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  name = '';
  email = '';
  phone!: number;
  category: ICategory | null = null;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category = this.categoryService.selectedCategory;
    if (this.category) {
      this.name = this.category.name;
      this.email = this.category.email;
      this.phone = this.category.phone;
    }
  }
  showCondition: boolean = false;
  onUpdate() {
    this.showCondition = true;
    let category: ICategory = {
      id: this.category?.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
    this.categoryService.updateCategory(category);
    this.router.navigate(['/user-table']);
    // setDatat();
    console.log(this.category);
  }

  showMethod() {
    let returnCondition: Boolean = true;
    if (this.showCondition) {
      console.log('button is touched');
    } else {
      returnCondition = this.canExit();
    }
    return returnCondition;
  }

  canExit() {
    if (confirm('Are you sure you want to exit?')) {
      return true;
    }
    return false;
  }
}
