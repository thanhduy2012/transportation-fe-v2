import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteConfirmDialogComponent } from './route-confirm-dialog.component';

describe('RouteConfirmDialogComponent', () => {
  let component: RouteConfirmDialogComponent;
  let fixture: ComponentFixture<RouteConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
