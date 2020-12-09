import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachFormPageComponent } from './coach-form-page.component';

describe('CoachFormPageComponent', () => {
  let component: CoachFormPageComponent;
  let fixture: ComponentFixture<CoachFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
