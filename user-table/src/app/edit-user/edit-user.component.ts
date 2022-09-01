import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users-container/User';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  @Input() editedStudent: User | null = null;
  constructor() {}
}
