import { createFeatureSelector } from '@ngrx/store';
import { TripManagementState } from './trip-management.reducer';

export const getTripManagementState=createFeatureSelector<TripManagementState>('tripManagement')