import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Categories/models/ICategory';
import { CategoryService } from 'src/app/Categories/services/category.service';
import { IPost } from '../../models/IPost';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  categories: ICategory[] = [];
  postForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl(''),
    categoryId: new FormControl(''),
  });
  constructor(
    private postService: PostService,
    private router: Router,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}
  posts: IPost[] = [];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  onAddPost() {
    let post = this.postForm.value;
    this.postService.addPost(post).subscribe((data) => {
      this.postService.emitPostService(true);
      this.router.navigate(['/posts']);
    });
  }
}
