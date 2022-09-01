import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
})
export class ConditionsComponent implements OnInit {
  showContent = true;
  isUserCreated = false;
  constructor() {}
  onCreateUser() {
    this.isUserCreated = true;
  }
  ngOnInit(): void {}
}
