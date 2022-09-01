import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sample-user';
  userData = 'shaikh';
  itemData = 'mujavviz';
  onChanges() {
    this.userData = 'User value changed';
  }
}
