import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDeactivate } from '../guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit,IDeactivate {
  userDetails: { id: string; name: string } = {
    id: '',
    name: '',
  };
  editUserDetails = this.userDetails;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.userDetails = {
        id: data['id'],
        name: data['name'],
      };
      this.editUserDetails = { ...this.userDetails }; //To make a copy
    });
  }
  canExit() {
    if (
      this.userDetails.id !==  this.editUserDetails.id ||
      this.userDetails.name !== this.editUserDetails.name
    ) {
      if (confirm('All the data will be lost')) {
        return true;
      }
      return false;
    }
    return true;
  }
}
