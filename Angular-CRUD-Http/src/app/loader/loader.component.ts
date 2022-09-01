import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  showLoading = false;
  ngOnInit(): void {
    this.messageService.loadingEvent.subscribe((data) => {
      this.showLoading = data;
    });
  }
}
