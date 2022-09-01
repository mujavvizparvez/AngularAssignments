import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ICategory } from 'src/app/Categories/models/ICategory';
import { CategoryService } from 'src/app/Categories/services/category.service';
import { IPost } from '../../models/IPost';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  [x: string]: any;
  categories: ICategory[] = [];
  postSearch: string = '';
  posts: IPost[] = [];
  constructor(
    private postService: PostService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getPost();
    this.postService.postServiceEvent.subscribe((data) => {
      this.getPost();
    });
  }

  onDeletePost(id: any) {
    if (confirm('Are you suryou want to delete category')) {
      this.postService.deletePost(id).subscribe((data) => {
        this.getPost();
        // this.postService.getPosts().subscribe((post: IPost[]) => {
        //   // this.posts = post;
        //   this.getPost();
        // });
      });
    } else {
      return;
    }
  }
  getPost() {
    //   this.postService.getPosts().subscribe((posts: IPost[]) => {
    //     this.posts = posts;
    //   });
    //   this.categoryService.getCategories().subscribe((categories) => {
    //     this.categories = categories;
    //   });
    // console.log(this.categories);
    // console.log(this.posts);

    this.posts = [];
    this.categoryService.getCategories().subscribe((categories) => {
      this.postService.getPosts().subscribe((posts: IPost[]) => {
        for (let category of categories) {
          for (let post of posts) {
            if (category.id === post.categoryId) {
              this.posts.push({ ...post, categoryName: category.title });
            }
          }
        }
      });
    });
  }
}
