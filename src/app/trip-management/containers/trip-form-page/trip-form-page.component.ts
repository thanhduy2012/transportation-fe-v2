
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coach, GetListCoachPagingByCoachRequest } from 'src/app/coach-management/models/models';
import { getListCoachPaging } from 'src/app/coach-management/store/coach.action';
import { CoachState } from 'src/app/coach-management/store/coach.reducer';
import { selectListCoach } from 'src/app/coach-management/store/coach.selector';
import { Driver, GetListDriverPagingByDriverRequest } from 'src/app/driver-management/models/model';
import { getListDriverPaging } from 'src/app/driver-management/store/driver.action';
import { DriverState } from 'src/app/driver-management/store/driver.reducer';
import { selectListDriver } from 'src/app/driver-management/store/driver.selector';
import { GetListRoutePagingByRouteRequest, Route } from 'src/app/route-management/models/model';
import { getListRoutePaging } from 'src/app/route-management/store/route.action';
import { RouteState } from 'src/app/route-management/store/route.reducer';
import { selectListRoute } from 'src/app/route-management/store/route.selector';
import { AddTripRequest, GetListTripPagingByTripRequest, Trip, UpdateTripRequest } from '../../models/model';
import { addTrip, getListTripPaging, updateTrip } from '../../store/trip.action';
import { TripState } from '../../store/trip.reducer';

@Component({
  selector: 'app-trip-form-page',
  templateUrl: './trip-form-page.component.html',
  styleUrls: ['./trip-form-page.component.scss']
})
export class TripFormPageComponent implements OnInit {

  data?: any;
  title?: string;
  btn?: string;
  listCoach$: Observable<Coach[]> | any;

  listDriver$: Observable<Driver[]> | any;

  listRoute$: Observable<Route[]> | any;
  constructor(
    private storeTrip: Store<TripState>,
    private storeCoach: Store<CoachState>,
    private storeDriver: Store<DriverState>,
    private storeRoute: Store<RouteState>,
    @Inject(MAT_DIALOG_DATA) private dataS: any,
    private dialogRef: MatDialogRef<TripFormPageComponent>
  ) {
    this.data = dataS;
    this.getListRoute();
    this.getListCoach();
    this.getListDriver();
    this.listRoute$ = this.storeRoute.pipe(select(selectListRoute));
    this.listDriver$ = this.storeDriver.pipe(select(selectListDriver));
    this.listCoach$ = this.storeCoach.pipe(select(selectListCoach));
  }

  ngOnInit(): void {

  }

  addTrip($event: Trip) {
    console.log("add Trip")
    const request: AddTripRequest = {
      trip: $event
    }
    this.storeTrip.dispatch(addTrip({ request }));
    this.dialogRef.close();
  }

  updateTrip($event: Trip) {
    console.log("update Trip")
    const request: UpdateTripRequest = {
      trip: $event
    }
    this.storeTrip.dispatch(updateTrip({ request }));
    this.dialogRef.close();
  }


  getListDriver() {
    const request: GetListDriverPagingByDriverRequest = {
      driver: {},
      pageNumber: 1,
      pageSize: 100

    }

    this.storeDriver.dispatch(getListDriverPaging({ request }));
  }

  getListCoach() {
    const request: GetListCoachPagingByCoachRequest = {
      coach: {},
      pageNumber: 1,
      pageSize: 100

    }

    this.storeCoach.dispatch(getListCoachPaging({ request }));
  }

  getListRoute() {
    
    const request: GetListRoutePagingByRouteRequest = {
      route: {},
      pageNumber: 1,
      pageSize: 100

    }
    console.log(1111111111);
    this.storeRoute.dispatch(getListRoutePaging({ request }));
  }
}
