import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'coach',
    canActivate:[],
    loadChildren:()=>import('./coach-management/coach-management.module').then(m =>m.CoachManagementModule)
  },
  {
    path:'driver',
    canActivate:[],
    loadChildren:()=>import('./driver-management/driver-management.module').then(m =>m.DriverManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
