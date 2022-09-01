import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNewComponent } from './sample-new.component';

describe('SampleNewComponent', () => {
  let component: SampleNewComponent;
  let fixture: ComponentFixture<SampleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
