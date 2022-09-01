import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getDetails().subscribe((users: IUser[]) => {
      this.users = users;
      console.log(users);
    });
  }
  onDeleteUser(id: any) {
    this.userService.deleteDetails(id).subscribe((data) => {
      this.userService.getDetails().subscribe((user: IUser[]) => {
        this.users = user;
      });
    });
  }
}
