import { createFeatureSelector } from '@ngrx/store';
import { DriverManagementState } from './driver-management.reducer';

export const getDriverManagementState=createFeatureSelector<DriverManagementState>('driverManagement')