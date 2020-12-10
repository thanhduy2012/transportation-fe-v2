
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddRouteRequest, Route, UpdateRouteRequest } from '../../models/model';
import { addRoute, updateRoute } from '../../store/route.action';
import { RouteState } from '../../store/route.reducer';

@Component({
  selector: 'app-route-form-page',
  templateUrl: './route-form-page.component.html',
  styleUrls: ['./route-form-page.component.scss']
})
export class RouteFormPageComponent implements OnInit {

  data?: any;
  title?: string;
  btn?: string
  constructor(
    private storeRoute: Store<RouteState>,
    @Inject(MAT_DIALOG_DATA) private dataS: any,
    private dialogRef: MatDialogRef<RouteFormPageComponent>
  ) { 
  this.data = dataS;
  }

  ngOnInit(): void {

  }

  addRoute($event:Route){
    console.log("add Route")
    const request: AddRouteRequest ={
      route: $event
    }
    this.storeRoute.dispatch(addRoute({request}));
    this.dialogRef.close();
  }

  updateRoute($event:Route){
    console.log("update Route")
    const request: UpdateRouteRequest ={
      route: $event
    }
    this.storeRoute.dispatch(updateRoute({request}));
    this.dialogRef.close();
  }

}
