import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleNewComponent } from './sample-new/sample-new.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserTwoWayComponent } from './add-user-two-way/add-user-two-way.component';
import { FormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';
import { CatogoriesDataComponent } from './catogories-data/catogories-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SampleNewComponent,
    NewComponentComponent,
    AddUserComponent,
    AddUserTwoWayComponent,
    CreateCategoryComponent,
    ConditionsComponent,
    NgForLoopComponent,
    CatogoriesDataComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
