import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css'],
})
export class AddDetailsComponent implements OnInit {
  users: IUser[] = [];
  userForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  onAddDetails() {
    
    let user = this.userForm.value;
    this.userService.addDetails(user).subscribe((data) => {
      console.log(data);
    });
    console.log(this.userForm.value);
   // this.router.navigate(['/userdetails']);
  }
}
