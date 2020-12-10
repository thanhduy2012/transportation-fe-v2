import { createSelector } from '@ngrx/store';
import { getTripManagementState } from '../trip-management.selector';

/** ***************** Select list Trip ************************  */
export const selectListTrip= createSelector(
    getTripManagementState,
    (state)=> state.trip.listTrip
  );
  
  export const selectPageOfListTrip= createSelector(
    getTripManagementState,
    (state)=> state.trip.pagableListTrip
  );
  
  export const selectIsLoadingOfListTrip = createSelector(
    getTripManagementState,
    (state)=> state.trip.isLoadingOflistTrip
  );
  
  export const selectErrorOfGetListTrip = createSelector(
    getTripManagementState,
    (state)=> state.trip.errorListTrip
  );
  /** ***************** Select list Trip ************************  */