import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/Posts/services/post.service';
import { ICategory } from '../../models/ICategory';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  titleSearch: string = '';
  categories: ICategory[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    //  this.categoryService.getCategories()
    //   .subscribe((categories: ICategory[]) => {
    //     this.categories = categories;
    //     console.log(categories);
    //   });

    this.categories = this.route.snapshot.data['data'];
    console.log(this.categories);
  }
  onDeleteCategory(id: any) {
    let count: number = 0;
  this.categoryService.deleteCategory(id).subscribe((data) => {
      this.categoryService
        .getCategories()
        .subscribe((category: ICategory[]) => {
          this.categories = category;
        });
    });
  }
  onAddCategory() {
    this.router.navigate(['/category', 'add']);
  }
}
