import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../users/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user!: User;
  @Output() userSelected = new EventEmitter<string>();
  constructor() {}

  onUserSelect() {
    this.userSelected.emit(this.user.name);
  }
}
