import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  name = 'Shaikh Mujavviz';
  // number = [2020, 55, 5, 8];
  buttonDisabled = true;
  constructor() {}
  onButtonClick() {
    this.buttonDisabled = false;
  }
  // constructor() {
  //   setInterval(() => {
  //     this.buttonDisabled = !this.buttonDisabled;
  //   }, 1000);
  // }

  ngOnInit(): void {}
}
