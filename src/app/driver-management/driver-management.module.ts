import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverManagementComponent } from './driver-management.component';
import { DriverManagementRoutingModule } from './driver-management-routing.module';
import { DriverPageComponent } from './containers/driver-page/driver-page.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';


@NgModule({
  declarations: [DriverManagementComponent,DriverPageComponent, DriverListComponent],
  imports: [
    CommonModule,
    DriverManagementRoutingModule
  ]
})
export class DriverManagementModule { }
