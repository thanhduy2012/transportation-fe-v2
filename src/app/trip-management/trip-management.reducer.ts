import { ActionReducerMap } from '@ngrx/store';
import { TripReducer, TripState } from './store/trip.reducer';

export interface TripManagementState {
    trip: TripState
  }
  
  export const TripManagementReducer: ActionReducerMap<TripManagementState> = {
    trip: TripReducer
  }