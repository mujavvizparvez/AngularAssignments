import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTwoWayComponent } from './add-user-two-way.component';

describe('AddUserTwoWayComponent', () => {
  let component: AddUserTwoWayComponent;
  let fixture: ComponentFixture<AddUserTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserTwoWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
