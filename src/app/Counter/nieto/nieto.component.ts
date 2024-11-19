import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: true,
  imports: [],
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent {

  @Input() contador!: number;
  @Output() contadorNietoCambio = new EventEmitter<number>();

  reset() {
    this.contador = 0;
    this.contadorNietoCambio.emit(this.contador)
  }

}
