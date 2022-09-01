import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  isAvailable = true;
  userName!: string;
  @ViewChild('user', { read: ElementRef }) users!: UserComponent;
  constructor() {}

  ngOnInit(): void {}
  // onAddUser(user: UsersComponent) {
  //   // console.log(user.users[0].name);
  //   // console.log(this.element.nativeElement.value);
  //   console.log(this.users);
  // }
  onAddUser() {
    console.log(this.users);
  }
}
