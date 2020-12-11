import { createSelector } from '@ngrx/store';
import { getCoachManagementState } from 'src/app/coach-management/coach-management.selector';

/** ***************** Select list coach ************************  */
export const selectListCoach= createSelector(
    getCoachManagementState,
    (state)=> state.coach.listCoach
  );
  
  export const selectPageOfListCoach= createSelector(
    getCoachManagementState,
    (state)=> state.coach.pagableListCoach
  );
  
  export const selectIsLoadingOfListCoach = createSelector(
    getCoachManagementState,
    (state)=> state.coach.isLoadingOflistCoach
  );


  export const selectSalaryOfCoach = createSelector(
    getCoachManagementState,
    (state)=> state.coach.salaryOfCoach
  );
  
  
  export const selectErrorOfGetListCoach = createSelector(
    getCoachManagementState,
    (state)=> state.coach.errorListCoach
  );
  /** ***************** Select list coach ************************  */