import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: [''],
    password: [''],
  });
  // registerForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onRegister() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    if (email && password) {
      this.authService.register(email, password).subscribe((data) => {
        this.authService.loggedInEvent.emit(true);
        this.router.navigate(['/']);
        console.log(data);
      });
    }
  }
}
