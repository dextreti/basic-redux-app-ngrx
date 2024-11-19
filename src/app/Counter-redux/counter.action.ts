
import { createAction, props } from '@ngrx/store';


export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

export const multiplication = createAction('[Counter] multiplication',
  props<{ param: number }>() 
);

export const division = createAction('[Counter] division',
  props<{ param: number }>() 
);

export const reset = createAction('[Counter] reset');


export const result = createAction(
  '[Counter] Increment Success',
  props<{ value: number }>() 
);

export const incrementFailure = createAction(
  '[Counter] Increment Failure',
  props<{ error: string }>() 
);