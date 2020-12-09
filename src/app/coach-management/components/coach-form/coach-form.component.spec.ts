import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachFormComponent } from './coach-form.component';

describe('CoachFormComponent', () => {
  let component: CoachFormComponent;
  let fixture: ComponentFixture<CoachFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
