import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { AuthGuard } from './Auth/Guards/auth.guard';
import { CategoryResolveService } from './Auth/services/resolvers/category-resolve.service';
import { AddCategoryComponent } from './Categories/components/add-category/add-category.component';
import { CategoriesComponent } from './Categories/components/categories/categories.component';
import { EditCategoryComponent } from './Categories/components/edit-category/edit-category.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './Posts/components/add-post/add-post.component';
import { EditPostComponent } from './Posts/components/edit-post/edit-post.component';
import { PostsComponent } from './Posts/components/posts/posts.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],resolve:{data:CategoryResolveService} 
  },
  { path: 'category/add', component: AddCategoryComponent },
  { path: 'category/:id/edit', component: EditCategoryComponent},
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'add', component: AddPostComponent }],
  },
  { path: 'post/:title/edit', component: EditPostComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
