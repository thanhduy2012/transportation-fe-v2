import { ActionReducerMap } from '@ngrx/store';
import { RouteReducer, RouteState } from './store/route.reducer';

export interface RouteManagementState {
    route: RouteState
  }
  
  export const RouteManagementReducer: ActionReducerMap<RouteManagementState> = {
    route: RouteReducer
  }
  