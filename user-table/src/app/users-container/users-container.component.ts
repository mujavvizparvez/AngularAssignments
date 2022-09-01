import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
import { LogService } from '../services/log.service';
import { User } from './User';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css'],
})
export class UsersContainerComponent {
  studentsList!: User[];
  selectedStudent: User | null = null;
  editedStudent: User | null = null;
  selectView = true;
  selectEdit = false;
  constructor() {
    this.studentsList = [
      new User(1, 'shaikh', 22, 'Mumbai'),
      new User(2, 'Mujavviz', 24, 'Pune'),
      // new User(3, 'Parvez', 20, 'Nagpur'),
      // new User(4, 'Mohit', 22, 'Hyderabad'),
      // new User(5, 'Navneet', 26, 'Delhi'),
      // new User(6, 'Afroz', 23, 'Chennai'),
    ];
    console.log(this.studentsList);
   // LogService = new LogService();
  }

  trackUser(index: number, studentsList: User) {
    return studentsList ? studentsList.id : undefined;
  }
  onDetailsAdd(details: IUser) {
    details.id = this.studentsList.length + 1;
    this.studentsList.push(details);
    let logService = new LogService();
    logService.log('category is selected', details);
    console.log('New category is added');
  }
  onStudentSelect(event: User) {
    this.selectedStudent = event;
    this.selectView = true;
    this.selectEdit = false;
    console.log(event);
  }
  onStudentEdit(event: User) {
    this.editedStudent = event;
    this.selectView = false;
    this.selectEdit = true;
    console.log(event);
  }
}
