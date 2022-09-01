import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent implements OnInit {
  categories!: ICategory[];
  name = '';
  email = '';
  phone!: number;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //  this.categories = this.categoryService.categories;

    
  }
  onAddDetails() {
    let category: ICategory = {
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
    this.categoryService.addDetails(category);
    console.log(this.categoryService);
    this.router.navigate(['/user-table']);
  }
}
