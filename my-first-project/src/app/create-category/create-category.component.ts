import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  className = 'btn btn-primary ';
  isButtonSmall = false;
  isButtonPrimary = false;
  classNames = 'btn btn-sm btn-primary';
  boxBackgroundColor = 'yellow';
  boxTextColor = 'green';
  boxPadding = '15px';
  boxFontSize = '';

  buttonClasses = {
    'btn-primary': false,
    'btn-sm': false,
  };
  constructor() {}

  ngOnInit(): void {}
  onButtonClick() {
    //  this.className = 'btn btn-primary btn-sm';
    this.isButtonSmall = true;
    this.isButtonPrimary = true;
    this.buttonClasses['btn-primary'] = true;
    this.buttonClasses['btn-sm'] = true;
    this.boxBackgroundColor = 'black';
    this.boxTextColor = 'orange';
    this.boxPadding = '55px';
    this.boxFontSize = '25px';
  }
  applyClasses() {
    // return this.buttonClasses;
    return {
      'btn-warning': true,
    };
  }
}
