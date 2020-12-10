import { ActionReducerMap } from '@ngrx/store';
import { DriverReducer, DriverState } from './store/driver.reducer';

export interface DriverManagementState {
    driver: DriverState
  }
  
  export const DriverManagementReducer: ActionReducerMap<DriverManagementState> = {
    driver: DriverReducer
  }
  