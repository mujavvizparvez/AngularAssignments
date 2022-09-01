import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // if (!this.authService.isAuthenticated()) {
    //   this.router.navigate(['/categories']);
    // }
  }
  onAddCategory() {
    // this.router.navigateByUrl('/categories');
    this.router.navigate(['/categories'], {
      queryParams: { hai: 'parvez', search: 'hello' },
      fragment: 'loading',
    });
  }
}
