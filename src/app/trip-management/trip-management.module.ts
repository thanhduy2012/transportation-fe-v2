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
    EffectsModule.forFeature(TripManagemnetEffect)
  ]
})
export class TripManagementModule { }
