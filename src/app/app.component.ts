import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./Counter/hijo/hijo.component";
import { ContadorComponent } from "./Counter/contador/contador.component";
import { CounterComponent } from "./Counter-redux/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    CounterComponent,
    ContadorComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'redux-app';
  
  

}
