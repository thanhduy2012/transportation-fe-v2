import { createAction, props } from '@ngrx/store';
import { AddRouteRequest, AddRouteResponse, DeleteRouteRequest, DeleteRouteResponse, GetListRoutePagingByRouteRequest, GetListRoutePagingByRouteResponse, UpdateRouteRequest, UpdateRouteResponse } from '../models/model';

  /************************************* Get List Route Paging *********************************/
  export const getListRoutePaging = createAction(
    '[Route/API] Get List Route Paging Request',
    props<{ request: GetListRoutePagingByRouteRequest }>()
  );
  
  export const getListRoutePagingSuccess = createAction(
    '[Route/API]  Get List Route Paging Success',
    props<{ response: GetListRoutePagingByRouteResponse }>()
  );
  
  export const getListRoutePagingFailure= createAction(
    '[Route/API]  Get List Route Paging Error',
    props<{ error: GetListRoutePagingByRouteResponse}>()
  );
  /************************************* Get List Route Paging *********************************/



  /************************************* Add Route *********************************/
  export const addRoute = createAction(
    '[Route/API] Add Route Request',
    props<{ request: AddRouteRequest }>()
  );
  
  export const addRouteSuccess = createAction(
    '[Route/API]  Add Route Success',
    props<{ response: AddRouteResponse }>()
  );
  
  export const addRouteFailure= createAction(
    '[Route/API]  Add Route Error',
    props<{ error: AddRouteResponse}>()
  );
  /*************************************Add Route *********************************/







  /************************************* Update Route *********************************/
  export const updateRoute = createAction(
    '[Route/API] Update Route Request',
    props<{ request: UpdateRouteRequest }>()
  );
  
  export const updateRouteSuccess = createAction(
    '[Route/API]  Update Route Success',
    props<{ response: UpdateRouteResponse }>()
  );
  
  export const updateRouteFailure= createAction(
    '[Route/API]  Update Route Error',
    props<{ error: UpdateRouteResponse}>()
  );
  /************************************* Update Route *********************************/







  /************************************* Delete Route *********************************/
  export const deleteRoute = createAction(
    '[Route/API] Delete Route Request',
    props<{ request: DeleteRouteRequest }>()
  );
  
  export const deleteRouteSuccess = createAction(
    '[Route/API]  Delete Route Success',
    props<{ response: DeleteRouteResponse }>()
  );
  
  export const deleteRouteFailure= createAction(
    '[Route/API]  Delete Route Error',
    props<{ error: DeleteRouteResponse}>()
  );
  /************************************* Delete Route *********************************/
