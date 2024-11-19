import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class CounterService{

    constructor() { }
    counter: number = 0;

    increment(): number {  
        this.counter += 1;;        
        this.Logger(this.counter)
        return this.counter;
    }

    decrement(): number{
        this.counter -= 1;;        
        this.Logger(this.counter)
        return this.counter;
    }

    division(pnum: number): number{
        this.counter /= pnum;;        
        this.Logger(this.counter)
        return this.counter;
    }

    multiplication(pnum: number): number {
        this.counter *= pnum;;        
        this.Logger(this.counter)
        return this.counter;        
    }    

    reset(): number {  
        this.counter = 0;        
        this.Logger(this.counter)
        return this.counter;
    }    

    private Logger(num: number): void{
        console.log(num)     
    }


}

