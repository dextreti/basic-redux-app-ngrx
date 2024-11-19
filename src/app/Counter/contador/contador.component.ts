import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  contador!:number
  constructor(){
    this.contador = 1;
  }

  incrementar(){

    this.contador++;
  }

  decrementar(){
    this.contador--;

  }

}
