import { createAction, props } from '@ngrx/store';
import { AddDriverRequest, AddDriverResponse, DeleteDriverRequest, DeleteDriverResponse, GetListDriverPagingByDriverRequest, GetListDriverPagingByDriverResponse, GetSalaryDriverRequest, GetSalaryDriverResponse, UpdateDriverRequest, UpdateDriverResponse } from '../models/model';

  /************************************* Get List Driver Paging *********************************/
  export const getListDriverPaging = createAction(
    '[Driver/API] Get List Driver Paging Request',
    props<{ request: GetListDriverPagingByDriverRequest }>()
  );
  
  export const getListDriverPagingSuccess = createAction(
    '[Driver/API]  Get List Driver Paging Success',
    props<{ response: GetListDriverPagingByDriverResponse }>()
  );
  
  export const getListDriverPagingFailure= createAction(
    '[Driver/API]  Get List Driver Paging Error',
    props<{ error: GetListDriverPagingByDriverResponse}>()
  );
  /************************************* Get List Driver Paging *********************************/



  /************************************* Add Driver *********************************/
  export const addDriver = createAction(
    '[Driver/API] Add Driver Request',
    props<{ request: AddDriverRequest }>()
  );
  
  export const addDriverSuccess = createAction(
    '[Driver/API]  Add Driver Success',
    props<{ response: AddDriverResponse }>()
  );
  
  export const addDriverFailure= createAction(
    '[Driver/API]  Add Driver Error',
    props<{ error: AddDriverResponse}>()
  );
  /*************************************Add Driver *********************************/







  /************************************* Update Driver *********************************/
  export const updateDriver = createAction(
    '[Driver/API] Update Driver Request',
    props<{ request: UpdateDriverRequest }>()
  );
  
  export const updateDriverSuccess = createAction(
    '[Driver/API]  Update Driver Success',
    props<{ response: UpdateDriverResponse }>()
  );
  
  export const updateDriverFailure= createAction(
    '[Driver/API]  Update Driver Error',
    props<{ error: UpdateDriverResponse}>()
  );
  /************************************* Update Driver *********************************/

  


















 /************************************* Get Salary Driver *********************************/
 export const getSalary = createAction(
  '[Driver/API] Get Salary Request',
  props<{ request: GetSalaryDriverRequest }>()
);

export const clearSalary = createAction(
  '[Driver/API]  Clear Salary  Success',
  props<any>()
);

export const getSalarySuccess = createAction(
  '[Driver/API]  Get Salary  Success',
  props<{ response: GetSalaryDriverResponse }>()
);

export const getSalaryFailure= createAction(
  '[Driver/API]  Get Salary  Error',
  props<{ error: GetSalaryDriverResponse}>()
);
/************************************* Get Salary Driver *********************************/

















  /************************************* Delete Driver *********************************/
  export const deleteDriver = createAction(
    '[Driver/API] Delete Driver Request',
    props<{ request: DeleteDriverRequest }>()
  );
  
  export const deleteDriverSuccess = createAction(
    '[Driver/API]  Delete Driver Success',
    props<{ response: DeleteDriverResponse }>()
  );
  
  export const deleteDriverFailure= createAction(
    '[Driver/API]  Delete Driver Error',
    props<{ error: DeleteDriverResponse}>()
  );
  /************************************* Delete Driver *********************************/
