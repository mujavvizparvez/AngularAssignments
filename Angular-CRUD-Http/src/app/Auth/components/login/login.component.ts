import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}
  onLogin() {
    this.messageService.showLoading();
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    if (email && password) {
      this.authService.login(email, password).subscribe((data) => {
        this.messageService.showLoading();
        this.authService.userDetails = data;
        this.authService.loggedInEvent.emit(true);
        this.messageService.setSuccessMessage('Login successfully completed');
        this.messageService.hideLoading();
        this.router.navigate(['/categories']);
        console.log(data);
      });
    }
  }
}
