import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Categories/models/ICategory';
import { CategoryService } from 'src/app/Categories/services/category.service';
import { IPost } from '../../models/IPost';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  categories: ICategory[] = [];
  postId: string = '';
  postForm = new FormGroup({
    title: new FormControl(''),
    categoryId: new FormControl(''),
    body: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
    this.postId = this.route.snapshot.params['title'];
    this.postService.getPostById(this.postId).subscribe((data) => {
      console.log(data);
      this.postForm.setValue({
        title: data.title,
        categoryId: data.categoryId,
        body: data.body,
      });
    });
  }
  onUpdatePost() {
    this.postService
      .updatePost(this.postForm.value as IPost, this.postId)
      .subscribe((data) => {
        this.router.navigate(['/posts']);
      });
  }
}
