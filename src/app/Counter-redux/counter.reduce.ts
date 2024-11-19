
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.action';
import { CounterStateModel } from './counter.state';


const initialCounterState: CounterStateModel = {
  value: 0,
  loading: false,
  error: null,
};


export const counterReducer = createReducer(
  initialCounterState,
  on(CounterActions.increment, (state) => ({
    ...state,
    loading: true, 
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    loading: true, 
  })),
  on(CounterActions.result, (state, { value }) => ({
    ...state,
    value,        
    loading: false, 
    error: null,  
  })),
  on(CounterActions.incrementFailure, (state, { error }) => ({
    ...state,
    loading: false, 
    error,         
  }))
);


