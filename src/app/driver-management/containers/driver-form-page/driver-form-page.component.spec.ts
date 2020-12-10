import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverFormPageComponent } from './driver-form-page.component';

describe('DriverFormPageComponent', () => {
  let component: DriverFormPageComponent;
  let fixture: ComponentFixture<DriverFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
