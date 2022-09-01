import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from '../users-container/User';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent {
  @Input() selectedUser: User | null = null;
 // @Output() studentSelected = new EventEmitter<User>();
  constructor() {}

  // onStudentSelect() {
  //   this.studentSelected.emit(this.stdData);
  // }
}
