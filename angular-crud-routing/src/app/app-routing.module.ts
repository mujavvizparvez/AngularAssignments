import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { DeactivateGuardService } from './guards/deactivate-guard.service';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'user-login', component: UserLoginComponent },
  {
    path: 'user-table',
    component: UserTableComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'add-details', component: AddDetailsComponent },
  {
    path: 'user-edit',
    component: UserEditComponent,
    canDeactivate: [DeactivateGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
