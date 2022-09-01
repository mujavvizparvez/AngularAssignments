import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForLoopComponent } from './ng-for-loop.component';

describe('NgForLoopComponent', () => {
  let component: NgForLoopComponent;
  let fixture: ComponentFixture<NgForLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForLoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
