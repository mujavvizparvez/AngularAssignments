import { Component } from '@angular/core';
import { AuthService } from './Auth/services/auth.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-CRUD-Http';
  errorMessage = '';
  succcessMessage = '';
  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.authService.getUserDetailsFromLocalStorage();
    this.messageService.succesMessageEvent.subscribe((data) => {
      this.succcessMessage = data;
    });
    this.messageService.errorMessageEvent.subscribe((data) => {
      this.errorMessage = data;
    });
  }
}
