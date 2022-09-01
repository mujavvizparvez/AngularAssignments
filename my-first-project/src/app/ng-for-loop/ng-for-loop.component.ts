import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
@Component({
  selector: 'app-ng-for-loop',
  templateUrl: './ng-for-loop.component.html',
  styleUrls: ['./ng-for-loop.component.css'],
})
export class NgForLoopComponent implements OnInit {
  users: IUser[] = [
    { id: 1, name: 'Shaikh' },
    { id: 2, name: 'Mujavviz' },
    { id: 3, name: 'Parvez' },
    { id: 4, name: 'Karim' },
      
  ];
 
  constructor() {}
  
  ngOnInit(): void {}
}
