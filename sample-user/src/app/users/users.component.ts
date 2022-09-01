import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class UsersComponent {
  // users:User[] | null =null;
  users!: User[];
  selectedUser: string | null = null;
  constructor() {
    this.users = [
      new User(1, 'Shaikh', 'Hyderabad', 'Software'),
      new User(2, 'Mujavviz', 'Mumbai', 'Sales'),
      new User(3, 'Parvez', 'Banglore', 'Pharmacy'),
      new User(4, 'Navneet', 'Patna', 'Software'),
      new User(5, 'Mohit', 'Delhi', 'Software'),
      new User(6, 'Afroz', 'Chennai', 'Software'),
    ];
    console.log(this.users);
  }
  trackUser(index: number, user: User) {
    return user ? user.id : undefined;
  }

  onUserSelect(event: string) {
    this.selectedUser = event;
    console.log(event);
  }
}
