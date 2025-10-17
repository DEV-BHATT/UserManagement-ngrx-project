import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import * as UserActions from './user.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  loadUsers$;
  addUser$;
  deleteUser$;
  updateUser$;

  constructor(private actions$: Actions, private userService: UserService) {
    // Load users
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() =>
          this.userService.getUsers().pipe(
            map(users => UserActions.loadUsersSuccess({ users })),
            catchError(error => of(UserActions.loadUsersFailure({ error })))
          )
        )
      )
    );

    // Add user
    this.addUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.addUser),
        mergeMap(action =>
          this.userService.addUser(action.user).pipe(
            map(user => UserActions.addUserSuccess({ user })),
            catchError(error => of(UserActions.addUserFailure({ error })))
          )
        )
      )
    );

    // Delete user
    this.deleteUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.deleteUser),
        mergeMap(action =>
          this.userService.deleteUser(action.id).pipe(
            map(() => UserActions.deleteUserSuccess({ id: action.id })),
            catchError(error => of(UserActions.deleteUserFailure({ error })))
          )
        )
      )
    );

    // Update user
this.updateUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.updateUser),
    mergeMap(action =>
      this.userService.updateUser(action.user).pipe(
        map(user => UserActions.updateUserSuccess({ user })),
        catchError(error => of(UserActions.updateUserFailure({ error })))
      )
    )
  )
);
  }
}


