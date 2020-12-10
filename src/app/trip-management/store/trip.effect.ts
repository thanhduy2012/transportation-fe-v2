import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TripService } from '../services/trip.service';

import * as TripAction from './trip.action';

@Injectable()
export class TripEffects {

  constructor(
    private action$: Actions,
    private service: TripService,
  ) { }

  /**
   *
   * effect get list Trip paging 
   * @author DuyLT16
   *  */
  getListTripPaging$ = createEffect(() =>
    this.action$.pipe(
      ofType(TripAction.getListTripPaging),
      mergeMap(
        action => this.service.getListTripPaging(action.request).pipe(
          map(response => {
              return TripAction.getListTripPagingSuccess({ response: response });
          }),
          catchError(err => of(TripAction.getListTripPagingFailure({ error: err })))
        )
      )
    )
  );



    /**
   *
   * effect add Trip  
   * @author DuyLT16
   *  */
  addTrip$ = createEffect(() =>
    this.action$.pipe(
      ofType(TripAction.addTrip),
      mergeMap(
        action => this.service.addTrip(action.request).pipe(
          map(response => {
              return TripAction.addTripSuccess({ response: response });
          }),
          catchError(err => of(TripAction.addTripFailure({ error: err })))
        )
      )
    )
  );


/**
   *
   * effect add Trip  
   * @author DuyLT16
   *  */
  deleteTrip$ = createEffect(() =>
    this.action$.pipe(
      ofType(TripAction.deleteTrip),
      mergeMap(
        action => this.service.deleteTrip(action.request).pipe(
          map(response => {
              return TripAction.deleteTripSuccess({ response: response });
          }),
          catchError(err => of(TripAction.deleteTripFailure({ error: err })))
        )
      )
    )
  );


        /**
   *
   * effect update Trip  
   * @author DuyLT16
   *  */
  updateTrip$ = createEffect(() =>
    this.action$.pipe(
      ofType(TripAction.updateTrip),
      mergeMap(
        action => this.service.updateTrip(action.request).pipe(
          map(response => {
              return TripAction.updateTripSuccess({ response: response });
          }),
          catchError(err => of(TripAction.updateTripFailure({ error: err })))
        )
      )
    )
  );



}