import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePageComponent } from './containers/route-page/route-page.component';

const routes: Routes = [
  {
    path: '', component: RoutePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteManagementRoutingModule { }
