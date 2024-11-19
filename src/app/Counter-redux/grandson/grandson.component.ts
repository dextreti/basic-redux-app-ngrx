import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AsyncPipe } from '@angular/common';
import { CounterState } from '../counter.state';
import * as counterActions from '../counter.action'
import * as cunterSelect from '../counter.selector'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grandson',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './grandson.component.html',
  styleUrl: './grandson.component.css'
})
export class GrandsonComponent {

  count$: Observable<number>;
  constructor(private store: Store<CounterState>) {
    this.count$ = store.select(cunterSelect.selectCounterValue);    
  }

  reset() {
    this.store.dispatch(counterActions.reset());    
  }

}
