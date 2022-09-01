import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  @ViewChild('form') signInForm!: NgForm;
  constructor(private authService: AuthService, private router: Router) {}
  userEmail!: string;
  userPassword!: string;

  ngOnInit(): void {}
  onSignIn() {
    this.authService.login(this.userEmail,this.userPassword);
    this.router.navigate(['/user-table']);
  }
  // onLogin() {
  //    this.authService.login();
  // }
  onLoginClick(form: any) {
    console.log(this.signInForm);
    console.log(this.signInForm.value);
  }
}
