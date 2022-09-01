import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../models/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
})
export class EditDetailsComponent implements OnInit {
  userId: string = '';
  userForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getDetailsById(this.userId).subscribe((data) => {
      this.userForm.setValue({
        title: data.title,
        description: data.description,
      });
    });
  }
  onUpdateDetails() {
    this.userService
      .updateDetails(this.userForm.value as IUser, this.userId)
      .subscribe((data) => {
        this.router.navigate(['/user/add']);
      });
  }
}
