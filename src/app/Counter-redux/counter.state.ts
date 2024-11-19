
export interface CounterStateModel {
  value: number;   
  loading: boolean; 
  error: string | null; 
}

export interface CounterState {
  counter: CounterStateModel; 
}
