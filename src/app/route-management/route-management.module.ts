import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteManagementRoutingModule } from './route-management-routing.module';
import { RoutePageComponent } from './containers/route-page/route-page.component';
import { RouteFormPageComponent } from './containers/route-form-page/route-form-page.component';
import { RouteConfirmDialogComponent } from './components/route-confirm-dialog/route-confirm-dialog.component';
import { RouteFormComponent } from './components/route-form/route-form.component';
import { RouteListComponent } from './components/route-list/route-list.component';
import { RouteSearchComponent } from './components/route-search/route-search.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouteManagementReducer } from './route-management.reducer';
import { RouteManagemnetEffect } from './route-management.effect';


@NgModule({
  declarations: [RoutePageComponent, RouteFormPageComponent, RouteConfirmDialogComponent, RouteFormComponent, RouteListComponent, RouteSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouteManagementRoutingModule,
    StoreModule.forFeature('routeManagement', RouteManagementReducer),
    EffectsModule.forFeature(RouteManagemnetEffect)
  ]
})
export class RouteManagementModule { }
