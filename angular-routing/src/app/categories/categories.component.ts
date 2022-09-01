import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { IDeactivate } from '../guards/deactivate-guard.service';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, IDeactivate {
  categories: ICategory[] = [];
  //constructor(private route: ActivatedRoute) {}
  // constructor(private categoryService: CategoryService) {}
  constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.data.subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  ngOnInit(): void {
    // this.categories = this.categoryService.categories;
    this.route.data.subscribe((data) => {
      console.log(data);
      this.categories = data['categories'];
      console.log(data);
    });
  }
  canExit() {
    if (confirm('Are you sure you want to exit?')) {
      return true;
    }
    return false;
  }
}
