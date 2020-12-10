import { createAction, props } from '@ngrx/store';
import { AddTripRequest, AddTripResponse, DeleteTripRequest, DeleteTripResponse, GetListTripPagingByTripRequest, GetListTripPagingByTripResponse, UpdateTripRequest, UpdateTripResponse } from '../models/model';

  /************************************* Get List Trip Paging *********************************/
  export const getListTripPaging = createAction(
    '[Trip/API] Get List Trip Paging Request',
    props<{ request: GetListTripPagingByTripRequest }>()
  );
  
  export const getListTripPagingSuccess = createAction(
    '[Trip/API]  Get List Trip Paging Success',
    props<{ response: GetListTripPagingByTripResponse }>()
  );
  
  export const getListTripPagingFailure= createAction(
    '[Trip/API]  Get List Trip Paging Error',
    props<{ error: GetListTripPagingByTripResponse}>()
  );
  /************************************* Get List Trip Paging *********************************/



  /************************************* Add Trip *********************************/
  export const addTrip = createAction(
    '[Trip/API] Add Trip Request',
    props<{ request: AddTripRequest }>()
  );
  
  export const addTripSuccess = createAction(
    '[Trip/API]  Add Trip Success',
    props<{ response: AddTripResponse }>()
  );
  
  export const addTripFailure= createAction(
    '[Trip/API]  Add Trip Error',
    props<{ error: AddTripResponse}>()
  );
  /*************************************Add Trip *********************************/







  /************************************* Update Trip *********************************/
  export const updateTrip = createAction(
    '[Trip/API] Update Trip Request',
    props<{ request: UpdateTripRequest }>()
  );
  
  export const updateTripSuccess = createAction(
    '[Trip/API]  Update Trip Success',
    props<{ response: UpdateTripResponse }>()
  );
  
  export const updateTripFailure= createAction(
    '[Trip/API]  Update Trip Error',
    props<{ error: UpdateTripResponse}>()
  );
  /************************************* Update Trip *********************************/







  /************************************* Delete Trip *********************************/
  export const deleteTrip = createAction(
    '[Trip/API] Delete Trip Request',
    props<{ request: DeleteTripRequest }>()
  );
  
  export const deleteTripSuccess = createAction(
    '[Trip/API]  Delete Trip Success',
    props<{ response: DeleteTripResponse }>()
  );
  
  export const deleteTripFailure= createAction(
    '[Trip/API]  Delete Trip Error',
    props<{ error: DeleteTripResponse}>()
  );
  /************************************* Delete Trip *********************************/
