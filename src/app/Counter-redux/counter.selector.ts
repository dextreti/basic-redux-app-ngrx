import { createSelector } from '@ngrx/store';
import { CounterState, CounterStateModel } from './counter.state';


const counterState = (state: CounterState) => state.counter;

export const selectCounterValue = createSelector(
  counterState,
  (state: CounterStateModel) => state.value
);

export const selectCounterLoading = createSelector(
  counterState,
  (state: CounterStateModel) => state.loading
);

export const selectCounterError = createSelector(
  counterState,
  (state: CounterStateModel) => state.error
);
