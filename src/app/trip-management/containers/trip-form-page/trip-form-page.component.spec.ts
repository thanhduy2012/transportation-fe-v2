import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormPageComponent } from './trip-form-page.component';

describe('TripFormPageComponent', () => {
  let component: TripFormPageComponent;
  let fixture: ComponentFixture<TripFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
