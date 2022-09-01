import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, tap } from 'rxjs';
import { IUserDetails } from '../models/IUserDetails';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userDetails: IUserDetails | null = null;
  apiKey = 'AIzaSyBJINZbYeEljx--dsHdB34EwnftA9x4uAg';
  loggedInEvent = new EventEmitter<boolean>();
  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string): Observable<IUserDetails> {
    return this.http
      .post<IUserDetails>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        tap((data) => {
          this.userDetails = data;
          this.saveDataInLocalStorage();
        //  this.autoLogout(5000);
        })
      );
  }
  register(email: string, password: string): Observable<IUserDetails> {
    return this.http
      .post<IUserDetails>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        tap((data) => {
          this.userDetails = data;
          this.saveDataInLocalStorage();
        })
      );
  }
  saveDataInLocalStorage() {
    // const expireDate = new Date(
    //   new Date().getTime() + +response.expiresIn * 1000
    // );

    let userDetailsJSON = JSON.stringify(this.userDetails);
    localStorage.setItem('userDetails', userDetailsJSON);
    // this.autoLogout(+response.ex)
  }
  getUserDetailsFromLocalStorage() {
    let userDetailsJSON = localStorage.getItem('userDetails');
    if (userDetailsJSON) {
      this.userDetails = JSON.parse(userDetailsJSON);
      this.loggedInEvent.emit(true);
    }
  }
  autoLogout(expirationDate: number) {
    console.log(expirationDate);
    setTimeout(() => {
      this.logOut();
    }, expirationDate);
 //   this.router.navigate(['/login']);
  }
  logOut() {
    localStorage.removeItem('userDetails');
    this.userDetails = null;
    this.loggedInEvent.emit(false);
  }
  get token() {
    return this.userDetails?.idToken;
  }
}
