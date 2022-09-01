import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id = '';
  name = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  // ngOnInit(): void {
  //   console.log(this.route.snapshot.params);
  //   this.id = this.route.snapshot.params['id'];
  //   this.name = this.route.snapshot.params['name'];
  // }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('param changed');
      this.id = params['id'];
      this.name = params['name'];
    });
  }
  onEditUser() {
    this.router.navigate(['/users', this.id, this.name, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
