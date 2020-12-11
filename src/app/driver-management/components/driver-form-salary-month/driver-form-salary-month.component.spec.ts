import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverFormSalaryMonthComponent } from './driver-form-salary-month.component';

describe('DriverFormSalaryMonthComponent', () => {
  let component: DriverFormSalaryMonthComponent;
  let fixture: ComponentFixture<DriverFormSalaryMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverFormSalaryMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverFormSalaryMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
