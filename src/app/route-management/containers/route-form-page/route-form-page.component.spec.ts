import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFormPageComponent } from './route-form-page.component';

describe('RouteFormPageComponent', () => {
  let component: RouteFormPageComponent;
  let fixture: ComponentFixture<RouteFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
