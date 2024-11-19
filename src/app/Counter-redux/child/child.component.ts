import { Component } from '@angular/core';
import { GrandsonComponent } from "../grandson/grandson.component";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import * as counterActions from '../counter.action';
import { selectCounterValue } from '../counter.selector';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    GrandsonComponent, AsyncPipe
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  
  count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.select(selectCounterValue);    
  }    

  multiplication() {    
    this.store.dispatch(counterActions.multiplication({ param: 2 }));
  }

  division() {
    this.store.dispatch(counterActions.division({ param: 2 }));
  }

  resetNieto() {
    this.store.dispatch(counterActions.reset());    
  }

}
