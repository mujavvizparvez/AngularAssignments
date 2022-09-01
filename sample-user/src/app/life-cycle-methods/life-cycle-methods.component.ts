import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  templateUrl: './life-cycle-methods.component.html',
  styleUrls: ['./life-cycle-methods.component.css'],
})
export class LifeCycleMethodsComponent implements OnInit {
  @Input() user!: string;
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChange) {
    console.log('onChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngoninit called');
  }
}
