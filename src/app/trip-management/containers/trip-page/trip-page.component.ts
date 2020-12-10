import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
