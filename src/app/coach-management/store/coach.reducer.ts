import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { CoachManagementState } from '../coach-management.reducer';
import { Coach, SalaryCoachDTO } from '../models/models';


import * as CoachAction from './coach.action';

export interface CoachState {

    isLoadingOflistCoach: boolean;
    listCoach: Coach[] | any;
    errorListCoach: any;
    pagableListCoach: any;


    salaryOfCoach: SalaryCoachDTO | any;

    isLoadingOfAddCoach: boolean;
    errorAddCoach: any;



}

export const initialState: CoachState = {

    isLoadingOflistCoach: false,
    listCoach: [],
    errorListCoach: null,
    pagableListCoach: null,



    salaryOfCoach: null,


    isLoadingOfAddCoach: false,
    errorAddCoach: null

}


export const reducers = createReducer(
    initialState,





















    /************************* Add Coach ************************** */

    on(CoachAction.getListCoachPaging, state => ({
        ...state,
        isLoadingOflistCoach: true,
        listCoach: [],
        errorListCoach: null,
        pagableListCoach: null
    })),
    on(CoachAction.getListCoachPagingSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOflistCoach: false,
            listCoach: response.page?.content,
            errorListCoach: null,
            pagableListCoach: response.page
        })
    }),

    on(CoachAction.getListCoachPagingFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistCoach: false,
            listCoach: [],
            errorListCoach: error,
            pagableListCoach: null
        }))
    }),
    /************************* Add Coach ************************** */





    /************************* Delete coach ************************** */

    on(CoachAction.deleteCoach, state => ({
        ...state,
    })),
    on(CoachAction.deleteCoachSuccess, (state, { response }) => {
        return ({
            ...state,
            listCoach: [...state.listCoach.filter((item: { id: number | undefined; }) => item.id != response.coach.id)]
        })
    }),
    /************************* delete coach ************************** */






















    /************************* Update coach ************************** */

    on(CoachAction.updateCoach, state => ({
        ...state,
    })),
    on(CoachAction.updateCoachSuccess, (state, { response }) => {
        return ({
            ...state,
            listCoach: [...state.listCoach.map((i: any, index: any, self: any) => {
                if (i.id == response.coach.id) return response.coach;
                return i;
            })]
        })
    }),
    /************************* Update coach ************************** */















    /************************* Get Salary Coach ************************** */

    on(CoachAction.getSalary, state => ({
        ...state,
    })),
    on(CoachAction.getSalarySuccess, (state, { response }) => {
        return ({
            ...state,
            salaryOfCoach: response.salaryCoachDTO
        })
    }),
    /************************* Get Salary Coach ************************** */



    /************************* Clear Salary Coach ************************** */

    on(CoachAction.clearSalaryCoach, (state) => {
        return ({
            ...state,
            salaryOfCoach: null
        })
    }),
    /************************* Clear Salary Coach ************************** */
















    /************************* Add Coach ************************** */

    on(CoachAction.addCoach, state => ({
        ...state,
        isLoadingOfAddCoach: true,
        errorAddCoach: null
    })),
    on(CoachAction.addCoachSuccess, (state, { response }) => {
        return ({
            ...state,
            isLoadingOfAddCoach: false,
            listCoach: [response.coach, ...state.listCoach],
            errorListCoach: null
        })
    }),

    on(CoachAction.addCoachFailure, (state, { error }) => {
        return (({
            ...state,
            isLoadingOflistCoach: false,
            errorListCoach: error
        }))
    })
    /************************* Add Coach ************************** */




)

export function CoachReducer(state: CoachState | undefined, action: Action) {
    return reducers(state, action);
}
