import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<any[]>('users');
export const selectAllUsers = createSelector(selectUserState, users => users);
