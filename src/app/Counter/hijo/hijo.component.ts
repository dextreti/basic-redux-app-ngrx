import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { NietoComponent } from "../nieto/nieto.component";

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [NietoComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() contador!: number;
  @Output() contadorCambio = new EventEmitter<number>();

  multiplicar() {
    this.contador *= 2;
    this.contadorCambio.emit(this.contador);
    
  }

  dividir() {
    this.contador /= 2;
    this.contadorCambio.emit(this.contador);    
  }

  resetNieto( nuevoContador:any ) {
    this.contador = nuevoContador;
    this.contadorCambio.emit(this.contador);    
    
  }

}
