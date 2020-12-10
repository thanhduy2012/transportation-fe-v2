import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RouteService } from '../services/route.service';

import * as RouteAction from './route.action';

@Injectable()
export class RouteEffects {

  constructor(
    private action$: Actions,
    private service: RouteService,
  ) { }

  /**
   *
   * effect get list Route paging 
   * @author DuyLT16
   *  */
  getListRoutePaging$ = createEffect(() =>
    this.action$.pipe(
      ofType(RouteAction.getListRoutePaging),
      mergeMap(
        action => this.service.getListRoutePaging(action.request).pipe(
          map(response => {
              return RouteAction.getListRoutePagingSuccess({ response: response });
          }),
          catchError(err => of(RouteAction.getListRoutePagingFailure({ error: err })))
        )
      )
    )
  );



    /**
   *
   * effect add Route  
   * @author DuyLT16
   *  */
  addRoute$ = createEffect(() =>
    this.action$.pipe(
      ofType(RouteAction.addRoute),
      mergeMap(
        action => this.service.addRoute(action.request).pipe(
          map(response => {
              return RouteAction.addRouteSuccess({ response: response });
          }),
          catchError(err => of(RouteAction.addRouteFailure({ error: err })))
        )
      )
    )
  );


/**
   *
   * effect add Route  
   * @author DuyLT16
   *  */
  deleteRoute$ = createEffect(() =>
    this.action$.pipe(
      ofType(RouteAction.deleteRoute),
      mergeMap(
        action => this.service.deleteRoute(action.request).pipe(
          map(response => {
              return RouteAction.deleteRouteSuccess({ response: response });
          }),
          catchError(err => of(RouteAction.deleteRouteFailure({ error: err })))
        )
      )
    )
  );


        /**
   *
   * effect update Route  
   * @author DuyLT16
   *  */
  updateRoute$ = createEffect(() =>
    this.action$.pipe(
      ofType(RouteAction.updateRoute),
      mergeMap(
        action => this.service.updateRoute(action.request).pipe(
          map(response => {
              return RouteAction.updateRouteSuccess({ response: response });
          }),
          catchError(err => of(RouteAction.updateRouteFailure({ error: err })))
        )
      )
    )
  );



}