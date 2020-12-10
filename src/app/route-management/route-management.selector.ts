import { createFeatureSelector } from '@ngrx/store';
import { RouteManagementState } from './route-management.reducer';

export const getRouteManagementState=createFeatureSelector<RouteManagementState>('routeManagement')