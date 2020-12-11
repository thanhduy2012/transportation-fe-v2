import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { DeleteTripRequest, GetListTripPagingByTripRequest, Trip } from '../../models/model';
import { deleteTrip, getListTripPaging } from '../../store/trip.action';
import { TripState } from '../../store/trip.reducer';
import { selectListTrip, selectPageOfListTrip } from '../../store/trip.selector';
import { TripFormPageComponent } from '../trip-form-page/trip-form-page.component';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit {

  pageOfListTrip$: Observable<any> | undefined;
  listTrip$: Observable<Trip[]> |any;

  listCoach$:Observable<Coach[]> |any;

  listDriver$:Observable<Driver[]> | any;

  listRoute$:Observable<Route[]> | any;



  TripSearch:Trip ={};
  PAGE_SIZE:number = 10;
  currentPage:number = 1;

  constructor(
    private storeTrip: Store<TripState>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pipeGeneral();
    this.pageOfListTrip$ = this.storeTrip.pipe(select(selectPageOfListTrip));
    this.listTrip$ = this.storeTrip.pipe(select(selectListTrip));

  }

    /**
   * Get list Trip
   * @author ThanhDuy
   */
  getListTrip(){
    const request: GetListTripPagingByTripRequest ={
        trip: this.TripSearch,
        pageNumber:this.currentPage,
        pageSize:this.PAGE_SIZE
      
    }

    this.storeTrip.dispatch(getListTripPaging({request}));
  }


 

  pipeGeneral(){
    this.getListTrip();
  }

  goToPage($event:any){
    this.currentPage = $event;
    this.getListTrip();
  }

  searchTrip($event:Trip){
    this.TripSearch = $event;
    this.getListTrip();
  }

  openDialog($event:any){
    const open = this.dialog.open(TripFormPageComponent, {
      width: '65%',
      data: $event
    });
  }

  deleteTrip($event: any){

    const request: DeleteTripRequest ={
        id: $event
      
    }

    this.storeTrip.dispatch(deleteTrip({request}));

  }

}
