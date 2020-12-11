import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachFormSalaryMonthComponent } from './coach-form-salary-month.component';

describe('CoachFormSalaryMonthComponent', () => {
  let component: CoachFormSalaryMonthComponent;
  let fixture: ComponentFixture<CoachFormSalaryMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachFormSalaryMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachFormSalaryMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
