import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DriverService } from '../services/driver.service';

import * as DriverAction from './driver.action';

@Injectable()
export class DriverEffects {

  constructor(
    private action$: Actions,
    private service: DriverService,
  ) { }

  /**
   *
   * effect get list Driver paging 
   * @author DuyLT16
   *  */
  getListDriverPaging$ = createEffect(() =>
    this.action$.pipe(
      ofType(DriverAction.getListDriverPaging),
      mergeMap(
        action => this.service.getListDriverPaging(action.request).pipe(
          map(response => {
              return DriverAction.getListDriverPagingSuccess({ response: response });
          }),
          catchError(err => of(DriverAction.getListDriverPagingFailure({ error: err })))
        )
      )
    )
  );



    /**
   *
   * effect add Driver  
   * @author DuyLT16
   *  */
  addDriver$ = createEffect(() =>
    this.action$.pipe(
      ofType(DriverAction.addDriver),
      mergeMap(
        action => this.service.addDriver(action.request).pipe(
          map(response => {
              return DriverAction.addDriverSuccess({ response: response });
          }),
          catchError(err => of(DriverAction.addDriverFailure({ error: err })))
        )
      )
    )
  );


/**
   *
   * effect add Driver  
   * @author DuyLT16
   *  */
  deleteDriver$ = createEffect(() =>
    this.action$.pipe(
      ofType(DriverAction.deleteDriver),
      mergeMap(
        action => this.service.deleteDriver(action.request).pipe(
          map(response => {
              return DriverAction.deleteDriverSuccess({ response: response });
          }),
          catchError(err => of(DriverAction.deleteDriverFailure({ error: err })))
        )
      )
    )
  );


        /**
   *
   * effect update Driver  
   * @author DuyLT16
   *  */
  updateDriver$ = createEffect(() =>
    this.action$.pipe(
      ofType(DriverAction.updateDriver),
      mergeMap(
        action => this.service.updateDriver(action.request).pipe(
          map(response => {
              return DriverAction.updateDriverSuccess({ response: response });
          }),
          catchError(err => of(DriverAction.updateDriverFailure({ error: err })))
        )
      )
    )
  );



          /**
   *
   * effect getSalary  
   * @author DuyLT16
   *  */
  getSalary$ = createEffect(() =>
    this.action$.pipe(
      ofType(DriverAction.getSalary),
      mergeMap(
        action => this.service.getSalary(action.request).pipe(
          map(response => {
              return DriverAction.getSalarySuccess({ response: response });
          }),
          catchError(err => of(DriverAction.getSalaryFailure({ error: err })))
        )
      )
    )
  );


}