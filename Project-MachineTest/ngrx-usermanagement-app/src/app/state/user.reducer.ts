import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, addUser, deleteUser, updateUser } from './user.action';

export const initialState: any[] = [];

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (_, { users }) => users),
  on(addUser, (state, { user }) => [...state, { ...user, id: Date.now() }]),
  on(deleteUser, (state, { id }) => state.filter(u => u.id !== id)),
 on(updateUser, (state, { user }) =>
    state.map(u => (u.id === user.id ? { ...u, ...user } : u))
  )
);
