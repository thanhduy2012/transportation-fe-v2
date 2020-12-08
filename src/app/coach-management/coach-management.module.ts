import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachManagementRoutingModule } from './coach-management-routing.module';
import { CoachListComponent } from './components/coach-list/coach-list.component';
import { CoachPageComponent } from './containers/coach-page/coach-page.component';
import { CoachManagementComponent } from './coach-management.component';
import { CoachSearchComponent } from './components/coach-search/coach-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CoachListComponent, CoachPageComponent, CoachManagementComponent, CoachSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    CoachManagementRoutingModule
  ]
})
export class CoachManagementModule { }
