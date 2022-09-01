import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crud-routing';
  constructor(private router: Router) {}
  showComponent = false;
  onLogin() {
    this.router.navigate(['/user-login']);
    this.showComponent = true;
  }
  // canExit() {
  //   if (confirm('Are you sure you want to exit?')) {
  //     return true;
  //   }
  //   return false;
  // }
}
