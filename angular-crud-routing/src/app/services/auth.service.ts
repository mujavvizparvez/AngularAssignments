import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmail = 'shaikh@qualminds.com';
  userPassword = '12345';
  isLoggedIn = false;
  constructor() {}
    login(email: string, password: string) {
        debugger;
      if (email == this.userEmail && password == this.userPassword) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
        
  }
  logout() {
    this.isLoggedIn = false;
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
