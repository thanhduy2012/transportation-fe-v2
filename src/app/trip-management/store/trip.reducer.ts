import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { TripManagementState } from '../trip-management.reducer';
import { Trip } from '../models/model';


import * as TripAction from './trip.action';

export interface TripState {

    isLoadingOflistTrip: boolean;
    listTrip: Trip[] | any;
    errorListTrip: any;
    pagableListTrip: any;



    isLoadingOfAddTrip: boolean;
    errorAddTrip: any;



}

export const initialState: TripState = {

    isLoadingOflistTrip: false,
    listTrip: [],
    errorListTrip: null,
    pagableListTrip: null,


    isLoadingOfAddTrip: false,
    errorAddTrip: null

}


export const reducers = createReducer(
    initialState,





















    /************************* Add Trip ************************** */

    on(TripAction.getListTripPaging, state => ({
        ...state,
        isLoadingOflistTrip: true,
        listTrip: [],
        errorListTrip: null,
        pagableListTrip: null
    })),
    on(TripAction.getListTripPagingSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOflistTrip: false,
            listTrip: response.page?.content,
            errorListTrip: null,
            pagableListTrip: response.page
        })
    }),
 
    on(TripAction.getListTripPagingFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistTrip: false,
            listTrip: [],
            errorListTrip: error,
            pagableListTrip: null
        }))
    }),
    /************************* Add Trip ************************** */





    /************************* Delete Trip ************************** */

    on(TripAction.deleteTrip, state => ({
        ...state,
    })),
    on(TripAction.deleteTripSuccess, (state, { response }) => {
        return ({
            ...state,
            listTrip: [...state.listTrip.filter((item: { id: number | undefined; }) => item.id != response.trip.id)]
        })
    }),
    /************************* delete Trip ************************** */





















    
    /************************* Update Trip ************************** */

    on(TripAction.updateTrip, state => ({
        ...state,
    })),
    on(TripAction.updateTripSuccess, (state, { response }) => {
        return ({
            ...state,
            listTrip: [...state.listTrip.map((i: any,index: any,self: any) => {
                if(i.id == response.trip.id) return response.trip;
                return i;
            })]
        })
    }),
    /************************* Update Trip ************************** */




















    /************************* Add Trip ************************** */

    on(TripAction.addTrip, state => ({
        ...state,
        isLoadingOfAddTrip: true,
        errorAddTrip: null
    })),
    on(TripAction.addTripSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOfAddTrip: false,
            listTrip: [response.trip,...state.listTrip],
            errorListTrip: null
        })
    }),
    
    on(TripAction.addTripFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistTrip: false,
            errorListTrip: error
        }))
    })
        /************************* Add Trip ************************** */




)

export function TripReducer(state: TripState | undefined, action: Action) {
    return reducers(state, action);
  }
