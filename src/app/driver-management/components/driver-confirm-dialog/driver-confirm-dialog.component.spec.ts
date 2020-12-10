import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverConfirmDialogComponent } from './driver-confirm-dialog.component';

describe('DriverConfirmDialogComponent', () => {
  let component: DriverConfirmDialogComponent;
  let fixture: ComponentFixture<DriverConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
