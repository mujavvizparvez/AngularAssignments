import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuardChildService } from './guards/auth-guard-child.service';
import { AuthGuardService } from './guards/auth.guard.service';
import { CategoryResolveService } from './guards/category-resolver.service';
import { DeactivateGuardService } from './guards/deactivate-guard.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    // data: {user: 'shaikh',dummy:'data'},
    resolve: { categories: CategoryResolveService },
    canDeactivate: [DeactivateGuardService],
  },
  // { path: 'user/1/shaikh', component: UserComponent },
  // { path: 'user/1/mujavviz', component: UserComponent },
  // { path: 'user/1/parvez', component: UserComponent },
  { path: 'aboutus', component: AboutUsComponent },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardChildService],
    children: [
      { path: ':id/:name', component: UserComponent },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [DeactivateGuardService],
      },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
  // OR { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
