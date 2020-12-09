import { ActionReducerMap } from '@ngrx/store';
import { CoachReducer, CoachState } from './store/coach.reducer';

export interface CoachManagementState {
    coach: CoachState
  }
  
  export const CoachManagementReducer: ActionReducerMap<CoachManagementState> = {
    coach: CoachReducer
  }
  