import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripManagementRoutingModule } from './trip-management-routing.module';
import { TripPageComponent } from './containers/trip-page/trip-page.component';
import { TripFormPageComponent } from './containers/trip-form-page/trip-form-page.component';
import { TripConfirmDialogComponent } from './components/trip-confirm-dialog/trip-confirm-dialog.component';
import { TripFormComponent } from './components/trip-form/trip-form.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { TripSearchComponent } from './components/trip-search/trip-search.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TripManagementReducer } from './trip-management.reducer';
import { TripManagemnetEffect } from './trip-management.effect';
import { TripManagementComponent } from './trip-management.component';
import { DriverManagementReducer } from '../driver-management/driver-management.reducer';
import { DriverManagemnetEffect } from '../driver-management/driver-management.effect';
import { CoachManagementReducer } from '../coach-management/coach-management.reducer';
import { CoachManagemnetEffect } from '../coach-management/coach-management.effect';
import { RouteManagementReducer } from '../route-management/route-management.reducer';
import { RouteManagemnetEffect } from '../route-management/route-management.effect';


@NgModule({
  declarations: [
    TripManagementComponent, 
    TripPageComponent, 
    TripListComponent, 
    TripFormPageComponent, 
    TripFormComponent, 
    TripConfirmDialogComponent, 
    TripSearchComponent
  ],
    
  imports: [
    SharedModule,
    CommonModule,
    TripManagementRoutingModule,
    StoreModule.forFeature('tripManagement', TripManagementReducer),
    StoreModule.forFeature('driverManagement', DriverManagementReducer),
    StoreModule.forFeature('coachManagement', CoachManagementReducer),
    StoreModule.forFeature('routeManagement', RouteManagementReducer),
    EffectsModule.forFeature(TripManagemnetEffect),
    EffectsModule.forFeature(DriverManagemnetEffect),
    EffectsModule.forFeature(RouteManagemnetEffect),
    EffectsModule.forFeature(CoachManagemnetEffect)
    
  ]
})
export class TripManagementModule { }
