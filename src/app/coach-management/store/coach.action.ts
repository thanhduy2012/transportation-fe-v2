import { createAction, props } from '@ngrx/store';
import { AddCoachRequest, AddCoachResponse, DeleteCoachRequest, DeleteCoachResponse, GetListCoachPagingByCoachRequest, GetListCoachPagingByCoachResponse, UpdateCoachRequest, UpdateCoachResponse } from '../models/models';

  /************************************* Get List Coach Paging *********************************/
  export const getListCoachPaging = createAction(
    '[Coach/API] Get List Coach Paging Request',
    props<{ request: GetListCoachPagingByCoachRequest }>()
  );
  
  export const getListCoachPagingSuccess = createAction(
    '[Coach/API]  Get List Coach Paging Success',
    props<{ response: GetListCoachPagingByCoachResponse }>()
  );
  
  export const getListCoachPagingFailure= createAction(
    '[Coach/API]  Get List Coach Paging Error',
    props<{ error: GetListCoachPagingByCoachResponse}>()
  );
  /************************************* Get List Coach Paging *********************************/



  /************************************* Add Coach *********************************/
  export const addCoach = createAction(
    '[Coach/API] Add Coach Request',
    props<{ request: AddCoachRequest }>()
  );
  
  export const addCoachSuccess = createAction(
    '[Coach/API]  Add Coach Success',
    props<{ response: AddCoachResponse }>()
  );
  
  export const addCoachFailure= createAction(
    '[Coach/API]  Add Coach Error',
    props<{ error: AddCoachResponse}>()
  );
  /*************************************Add Coach *********************************/







  /************************************* Update Coach *********************************/
  export const updateCoach = createAction(
    '[Coach/API] Update Coach Request',
    props<{ request: UpdateCoachRequest }>()
  );
  
  export const updateCoachSuccess = createAction(
    '[Coach/API]  Update Coach Success',
    props<{ response: UpdateCoachResponse }>()
  );
  
  export const updateCoachFailure= createAction(
    '[Coach/API]  Update Coach Error',
    props<{ error: UpdateCoachResponse}>()
  );
  /************************************* Update Coach *********************************/







  /************************************* Delete Coach *********************************/
  export const deleteCoach = createAction(
    '[Coach/API] Delete Coach Request',
    props<{ request: DeleteCoachRequest }>()
  );
  
  export const deleteCoachSuccess = createAction(
    '[Coach/API]  Delete Coach Success',
    props<{ response: DeleteCoachResponse }>()
  );
  
  export const deleteCoachFailure= createAction(
    '[Coach/API]  Delete Coach Error',
    props<{ error: DeleteCoachResponse}>()
  );
  /************************************* Delete Coach *********************************/
