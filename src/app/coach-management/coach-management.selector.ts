import { createFeatureSelector } from '@ngrx/store';
import { CoachManagementState } from './coach-management.reducer';

export const getCoachManagementState=createFeatureSelector<CoachManagementState>('coachManagement')