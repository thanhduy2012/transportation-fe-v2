import { createSelector } from '@ngrx/store';
import { getDriverManagementState } from '../driver-management.selector';

/** ***************** Select list Driver ************************  */
export const selectListDriver= createSelector(
    getDriverManagementState,
    (state)=> state.driver.listDriver
  );
  
  export const selectPageOfListDriver= createSelector(
    getDriverManagementState,
    (state)=> state.driver.pagableListDriver
  );
  
  export const selectIsLoadingOfListDriver = createSelector(
    getDriverManagementState,
    (state)=> state.driver.isLoadingOflistDriver
  );
  
  export const selectErrorOfGetListDriver = createSelector(
    getDriverManagementState,
    (state)=> state.driver.errorListDriver
  );

  export const selectSalaryDriver = createSelector(
    getDriverManagementState,
    (state)=> state.driver.salaryDriver
  );
  /** ***************** Select list Driver ************************  */