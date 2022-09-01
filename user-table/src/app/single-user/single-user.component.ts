import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../users-container/User';
import { IUser } from '../models/IUser';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent {
  id: any = '';
  name: string = '';
  age: any = '';
  location: string = '';
  @Input() stdData!: User;
  @Output() studentSelected = new EventEmitter<User>();
  @Output() studentEdited = new EventEmitter<User>();
  @Output() studentDeleted = new EventEmitter<User>();
  constructor() {}

  onStudentSelect() {
    this.studentSelected.emit(this.stdData);
  }
  onStudentEdit() {
    console.log('I am from edit');
    this.studentEdited.emit(this.stdData);
  }
  // onStudentDelete() {
  //   console.log('student deleted');
  //   let details: IUser = {
  //     id: this.id,
  //     name: this.name,
  //     age: this.age,
  //     location: this.location,
  //   };
  //  this.detailsDeleted.emit(details);
  // }
}
