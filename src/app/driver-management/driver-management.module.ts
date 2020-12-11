import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverManagementComponent } from './driver-management.component';
import { DriverManagementRoutingModule } from './driver-management-routing.module';
import { DriverPageComponent } from './containers/driver-page/driver-page.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { DriverFormPageComponent } from './containers/driver-form-page/driver-form-page.component';
import { DriverFormComponent } from './components/driver-form/driver-form.component';
import { DriverSearchComponent } from './components/driver-search/driver-search.component';
import { DriverConfirmDialogComponent } from './components/driver-confirm-dialog/driver-confirm-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DriverManagemnetEffect } from './driver-management.effect';
import { DriverManagementReducer } from './driver-management.reducer';
import { DriverFormSalaryMonthComponent } from './components/driver-form-salary-month/driver-form-salary-month.component';


@NgModule({
  declarations: [
    DriverManagementComponent,
    DriverPageComponent, 
    DriverListComponent,
    DriverFormPageComponent, 
    DriverFormComponent, 
    DriverSearchComponent, 
    DriverConfirmDialogComponent, DriverFormSalaryMonthComponent],
  imports: [
    SharedModule,
    CommonModule,
    DriverManagementRoutingModule,
    
    StoreModule.forFeature('driverManagement', DriverManagementReducer),
    EffectsModule.forFeature(DriverManagemnetEffect)
  ]
})
export class DriverManagementModule { }
