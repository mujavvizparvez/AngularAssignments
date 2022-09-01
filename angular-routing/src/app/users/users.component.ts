import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
 //import {Router} from '../services/auth.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 // constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  //   if (!this.authService.isAuthenticated()) {
  //      this.router.navigate(['/'])
  // }
  }

}
