import { createSelector } from '@ngrx/store';
import { getRouteManagementState } from '../route-management.selector';

/** ***************** Select list Route ************************  */
export const selectListRoute= createSelector(
    getRouteManagementState,
    (state)=> state.route.listRoute
  );
  
  export const selectPageOfListRoute= createSelector(
    getRouteManagementState,
    (state)=> state.route.pagableListRoute
  );
  
  export const selectIsLoadingOfListRoute = createSelector(
    getRouteManagementState,
    (state)=> state.route.isLoadingOflistRoute
  );
  
  export const selectErrorOfGetListRoute = createSelector(
    getRouteManagementState,
    (state)=> state.route.errorListRoute
  );
  /** ***************** Select list Route ************************  */