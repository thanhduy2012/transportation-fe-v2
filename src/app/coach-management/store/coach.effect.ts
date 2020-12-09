import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CoachService } from '../services/coach.service';

import * as CoachAction from './coach.action';

@Injectable()
export class CoachEffects {

  constructor(
    private action$: Actions,
    private service: CoachService,
  ) { }

  /**
   *
   * effect get list coach paging 
   * @author DuyLT16
   *  */
  getListCoachPaging$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoachAction.getListCoachPaging),
      mergeMap(
        action => this.service.getListCoachPaging(action.request).pipe(
          map(response => {
              return CoachAction.getListCoachPagingSuccess({ response: response });
          }),
          catchError(err => of(CoachAction.getListCoachPagingFailure({ error: err })))
        )
      )
    )
  );



    /**
   *
   * effect add coach  
   * @author DuyLT16
   *  */
  addCoach$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoachAction.addCoach),
      mergeMap(
        action => this.service.addCoach(action.request).pipe(
          map(response => {
              return CoachAction.addCoachSuccess({ response: response });
          }),
          catchError(err => of(CoachAction.addCoachFailure({ error: err })))
        )
      )
    )
  );


/**
   *
   * effect add coach  
   * @author DuyLT16
   *  */
  deleteCoach$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoachAction.deleteCoach),
      mergeMap(
        action => this.service.deleteCoach(action.request).pipe(
          map(response => {
              return CoachAction.deleteCoachSuccess({ response: response });
          }),
          catchError(err => of(CoachAction.deleteCoachFailure({ error: err })))
        )
      )
    )
  );


        /**
   *
   * effect update coach  
   * @author DuyLT16
   *  */
  updateCoach$ = createEffect(() =>
    this.action$.pipe(
      ofType(CoachAction.updateCoach),
      mergeMap(
        action => this.service.updateCoach(action.request).pipe(
          map(response => {
              return CoachAction.updateCoachSuccess({ response: response });
          }),
          catchError(err => of(CoachAction.updateCoachFailure({ error: err })))
        )
      )
    )
  );



}