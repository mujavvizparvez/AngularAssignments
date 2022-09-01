import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userName: string = '';
  constructor() {}

  ngOnInit(): void {}

  onAddUser(user: HTMLInputElement) {
    console.log(user.value);
  }
}
