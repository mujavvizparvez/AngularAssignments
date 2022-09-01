import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css'],
})
export class NewComponentComponent implements OnInit {
  isButtonDisabled = true;
  constructor() {}

  ngOnInit(): void {}
  onButtonClick() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
