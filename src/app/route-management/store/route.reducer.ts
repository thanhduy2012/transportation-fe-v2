import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { RouteManagementState } from '../route-management.reducer';
import { Route } from '../models/model';


import * as RouteAction from './route.action';

export interface RouteState {

    isLoadingOflistRoute: boolean;
    listRoute: Route[] | any;
    errorListRoute: any;
    pagableListRoute: any;



    isLoadingOfAddRoute: boolean;
    errorAddRoute: any;



}

export const initialState: RouteState = {

    isLoadingOflistRoute: false,
    listRoute: [],
    errorListRoute: null,
    pagableListRoute: null,


    isLoadingOfAddRoute: false,
    errorAddRoute: null

}


export const reducers = createReducer(
    initialState,





















    /************************* Add Route ************************** */

    on(RouteAction.getListRoutePaging, state => ({
        ...state,
        isLoadingOflistRoute: true,
        listRoute: [],
        errorListRoute: null,
        pagableListRoute: null
    })),
    on(RouteAction.getListRoutePagingSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOflistRoute: false,
            listRoute: response.page?.content,
            errorListRoute: null,
            pagableListRoute: response.page
        })
    }),
 
    on(RouteAction.getListRoutePagingFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistRoute: false,
            listRoute: [],
            errorListRoute: error,
            pagableListRoute: null
        }))
    }),
    /************************* Add Route ************************** */





    /************************* Delete Route ************************** */

    on(RouteAction.deleteRoute, state => ({
        ...state,
    })),
    on(RouteAction.deleteRouteSuccess, (state, { response }) => {
        return ({
            ...state,
            listRoute: [...state.listRoute.filter((item: { id: number | undefined; }) => item.id != response.route.id)]
        })
    }),
    /************************* delete Route ************************** */





















    
    /************************* Update Route ************************** */

    on(RouteAction.updateRoute, state => ({
        ...state,
    })),
    on(RouteAction.updateRouteSuccess, (state, { response }) => {
        return ({
            ...state,
            listRoute: [...state.listRoute.map((i: any,index: any,self: any) => {
                if(i.id == response.route.id) return response.route;
                return i;
            })]
        })
    }),
    /************************* Update Route ************************** */




















    /************************* Add Route ************************** */

    on(RouteAction.addRoute, state => ({
        ...state,
        isLoadingOfAddRoute: true,
        errorAddRoute: null
    })),
    on(RouteAction.addRouteSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOfAddRoute: false,
            listRoute: [response.route,...state.listRoute],
            errorListRoute: null
        })
    }),
    
    on(RouteAction.addRouteFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistRoute: false,
            errorListRoute: error
        }))
    })
        /************************* Add Route ************************** */




)

export function RouteReducer(state: RouteState | undefined, action: Action) {
    return reducers(state, action);
  }
