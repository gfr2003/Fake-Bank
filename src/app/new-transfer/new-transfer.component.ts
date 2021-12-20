import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() clickTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência...');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.clickTransferir.emit(valorEmitir);
    this.clearInputs();
  }
  clearInputs() {
    this.valor = null;
    this.destino = null;
  }
  constructor() {}
}
