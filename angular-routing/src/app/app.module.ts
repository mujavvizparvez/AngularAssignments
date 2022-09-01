import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'categories', component: CategoriesComponent },
//   // { path: 'user/1/shaikh', component: UserComponent },
//   // { path: 'user/1/mujavviz', component: UserComponent },
//   // { path: 'user/1/parvez', component: UserComponent },
//   { path: 'aboutus', component: AboutUsComponent },
//   {
//     path: 'users',
//     component: UsersComponent,
//     children: [{ path: ':id/:name', component: UserComponent },
//     {path:':id/:name/edit',component:EditUserComponent}],
//   },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
//   // OR { path: '**', component: NotFoundComponent },
// ];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutUsComponent,
    CategoriesComponent,
    UserComponent,
    UsersComponent,
    NotFoundComponent,
    EditUserComponent,
  ],
  // imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
