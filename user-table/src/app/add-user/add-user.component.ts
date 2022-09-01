import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  id: any = '';
  name: string = '';
  age: any = '';
  location: string = '';
  @Output() detailsAdded = new EventEmitter<IUser>();

  constructor() {}

  ngOnInit(): void {}
  onAddDetails() {
    let details: IUser = {
      id: this.id,
      name: this.name,
      age: this.age,
      location: this.location,
    };
    this.detailsAdded.emit(details);
  }
}
