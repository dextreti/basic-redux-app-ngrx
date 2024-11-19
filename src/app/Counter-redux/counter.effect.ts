// counter.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, of } from 'rxjs';
import { CounterService } from './Services/counter.service';
import * as counterActions from './counter.action';

@Injectable()
export class CounterEffects {

  private counterService = inject(CounterService);
  action$ = inject(Actions);
  

  increment$ = createEffect(() =>
    this.action$.pipe(
      ofType(counterActions.increment), 
      map(() => {
        const result = this.counterService.increment(); 
        return counterActions.result({ value: result }); 
      }),
      catchError((error) =>
        of(counterActions.incrementFailure({ error: error.message }))
      )
    )
  );
  

  decrement$ = createEffect(() =>
    this.action$.pipe(
      ofType(counterActions.decrement), 
      map(() => {
        const result = this.counterService.decrement(); 
        return counterActions.result({ value: result }); 
      }),
      catchError((error) =>
        of(counterActions.incrementFailure({ error: error.message }))
      )
    )
  );
  

  multiplication$ = createEffect(() =>
    this.action$.pipe(
      ofType(counterActions.multiplication), 
      map((payload) => {
        const result = this.counterService.multiplication(payload.param); 
        return counterActions.result({ value: result }); 
      }),
      catchError((error) =>
        of(counterActions.incrementFailure({ error: error.message }))
      )
    )
  );

  division$ = createEffect(() =>
    this.action$.pipe(
      ofType(counterActions.division), 
      map((payload) => {
        const result = this.counterService.division(payload.param); 
        return counterActions.result({ value: result }); 
      }),
      catchError((error) =>
        of(counterActions.incrementFailure({ error: error.message }))
      )
    )
  );

  reset$ = createEffect(() =>
    this.action$.pipe(
      ofType(counterActions.reset), 
      map(() => {
        const result = this.counterService.reset(); 
        return counterActions.result({ value: result }); 
      }),
      catchError((error) =>
        of(counterActions.incrementFailure({ error: error.message }))
      )
    )
  );
  
  
}
