import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoriesDataComponent } from './catogories-data.component';

describe('CatogoriesDataComponent', () => {
  let component: CatogoriesDataComponent;
  let fixture: ComponentFixture<CatogoriesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogoriesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogoriesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
