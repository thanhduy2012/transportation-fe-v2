import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachManagementRoutingModule } from './coach-management-routing.module';
import { CoachListComponent } from './components/coach-list/coach-list.component';
import { CoachPageComponent } from './containers/coach-page/coach-page.component';
import { CoachManagementComponent } from './coach-management.component';
import { CoachSearchComponent } from './components/coach-search/coach-search.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoachManagemnetEffect } from './coach-management.effect';
import {CoachManagementReducer} from "./coach-management.reducer";
import { CoachFormComponent } from './components/coach-form/coach-form.component';
import { CoachFormPageComponent } from './containers/coach-form-page/coach-form-page.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [CoachListComponent, CoachPageComponent, CoachManagementComponent, CoachSearchComponent, CoachFormComponent, CoachFormPageComponent, ConfirmDialogComponent],
  imports: [
    SharedModule,
    CommonModule,
    CoachManagementRoutingModule,
    StoreModule.forFeature('coachManagement', CoachManagementReducer),
    EffectsModule.forFeature(CoachManagemnetEffect)
  ]
})
export class CoachManagementModule { }
