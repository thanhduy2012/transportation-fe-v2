import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripConfirmDialogComponent } from './trip-confirm-dialog.component';

describe('TripConfirmDialogComponent', () => {
  let component: TripConfirmDialogComponent;
  let fixture: ComponentFixture<TripConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
