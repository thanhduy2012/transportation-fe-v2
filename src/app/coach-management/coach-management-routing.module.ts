import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachPageComponent } from './containers/coach-page/coach-page.component';

const routes: Routes = [
  {
    path: '', component: CoachPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachManagementRoutingModule { }
