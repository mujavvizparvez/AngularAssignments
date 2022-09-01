import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './Categories/components/categories/categories.component';
import { AddCategoryComponent } from './Categories/components/add-category/add-category.component';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './Categories/components/edit-category/edit-category.component';
import { PostsComponent } from './Posts/components/posts/posts.component';
import { PostDetailsComponent } from './Posts/components/post-details/post-details.component';
import { AddPostComponent } from './Posts/components/add-post/add-post.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';
import { LoaderComponent } from './loader/loader.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { EditPostComponent } from './Posts/components/edit-post/edit-post.component';
import { PostPipe } from './Pipes/filterPost.pipe';
import { CategoryResolveService } from './Auth/services/resolvers/category-resolve.service';

//import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    PostsComponent,
    PostDetailsComponent,
    AddPostComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    FilterPipe,
    PostPipe,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  CategoryResolveService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
