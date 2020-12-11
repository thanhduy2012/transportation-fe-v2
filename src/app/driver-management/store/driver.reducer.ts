import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { DriverManagementState } from '../driver-management.reducer';
import { Driver, SalaryDriverDTO } from '../models/model';


import * as DriverAction from './driver.action';

export interface DriverState {

    isLoadingOflistDriver: boolean;
    listDriver: Driver[] | any;
    errorListDriver: any;
    pagableListDriver: any;

    salaryDriver: SalaryDriverDTO | any;



    isLoadingOfAddDriver: boolean;
    errorAddDriver: any;



}

export const initialState: DriverState = {

    isLoadingOflistDriver: false,
    listDriver: [],
    errorListDriver: null,
    pagableListDriver: null,


    isLoadingOfAddDriver: false,
    errorAddDriver: null,


    salaryDriver: null,

}


export const reducers = createReducer(
    initialState,





















    /************************* Add Driver ************************** */

    on(DriverAction.getListDriverPaging, state => ({
        ...state,
        isLoadingOflistDriver: true,
        listDriver: [],
        errorListDriver: null,
        pagableListDriver: null
    })),
    on(DriverAction.getListDriverPagingSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOflistDriver: false,
            listDriver: response.page?.content,
            errorListDriver: null,
            pagableListDriver: response.page
        })
    }),
 
    on(DriverAction.getListDriverPagingFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistDriver: false,
            listDriver: [],
            errorListDriver: error,
            pagableListDriver: null
        }))
    }),
    /************************* Add Driver ************************** */





    /************************* Delete Driver ************************** */

    on(DriverAction.deleteDriver, state => ({
        ...state,
    })),
    on(DriverAction.deleteDriverSuccess, (state, { response }) => {
        return ({
            ...state,
            listDriver: [...state.listDriver.filter((item: { id: number | undefined; }) => item.id != response.driver.id)]
        })
    }),
    /************************* delete Driver ************************** */





















    
    /************************* Update Driver ************************** */

    on(DriverAction.updateDriver, state => ({
        ...state,
    })),
    on(DriverAction.updateDriverSuccess, (state, { response }) => {
        return ({
            ...state,
            listDriver: [...state.listDriver.map((i: any,index: any,self: any) => {
                if(i.id == response.driver.id) return response.driver;
                return i;
            })]
        })
    }),
    /************************* Update Driver ************************** */


        
    /************************* get salary driver ************************** */

    on(DriverAction.getSalary, state => ({
        ...state,
    })),
    on(DriverAction.getSalarySuccess, (state, { response }) => {
        return ({
            ...state,
            salaryDriver:response.salaryDriverDTO
        })
    }),
    /************************* get salary driver ************************** */

    /************************* clear salary driver ************************** */


    on(DriverAction.clearSalary, (state) => {
        console.log("1111111111111111")
        return ({
            ...state,
            salaryDriver:null
        })
    }),
    /************************* clear salary driver ************************** */



















    /************************* Add Driver ************************** */

    on(DriverAction.addDriver, state => ({
        ...state,
        isLoadingOfAddDriver: true,
        errorAddDriver: null
    })),
    on(DriverAction.addDriverSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOfAddDriver: false,
            listDriver: [response.driver,...state.listDriver],
            errorListDriver: null
        })
    }),
    
    on(DriverAction.addDriverFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistDriver: false,
            errorListDriver: error
        }))
    })
        /************************* Add Driver ************************** */




)

export function DriverReducer(state: DriverState | undefined, action: Action) {
    return reducers(state, action);
  }
