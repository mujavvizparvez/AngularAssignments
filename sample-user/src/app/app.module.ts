import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleMethodsComponent } from './life-cycle-methods/life-cycle-methods.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ColorsDirective } from './Directives/colors.directive';
import { AlternateIfDirective } from './Directives/AlternateIf.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CreateUserComponent,
    LifeCycleMethodsComponent,
    AddUserComponent,
    ColorsDirective,
    AlternateIfDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
