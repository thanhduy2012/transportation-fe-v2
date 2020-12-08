import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverPageComponent } from './containers/driver-page/driver-page.component';

const routes: Routes = [
  {
    path: '', component: DriverPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverManagementRoutingModule { }
