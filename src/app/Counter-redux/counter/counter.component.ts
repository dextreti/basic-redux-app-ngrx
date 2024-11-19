import { Component,  } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Store  } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import * as counterActions from '../counter.action';
import { selectCounterLoading, selectCounterValue } from '../counter.selector';
import { CounterState } from '../counter.state';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    ChildComponent,
    AsyncPipe
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counterValue$: Observable<number>;
  //loading$: Observable<boolean>;
  
  constructor(private store: Store<CounterState> ) {
    this.counterValue$ = this.store.select(selectCounterValue); 
    //this.loading$ = this.store.select(selectCounterLoading); 
  }
  
  incrementar() {
    this.store.dispatch(counterActions.increment());
  }

  decrementar(){
    this.store.dispatch(counterActions.decrement());    
  }

}
