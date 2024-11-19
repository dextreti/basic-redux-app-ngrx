import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer  } from './Counter-redux/counter.reduce';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './Counter-redux/counter.effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),    
    provideStore({
      counter: counterReducer      
    }),
    //provideState({ name: 'product', reducer: ProductReducer }),
    provideEffects([CounterEffects]),
    
  ]
};
