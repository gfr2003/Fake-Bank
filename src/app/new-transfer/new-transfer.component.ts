import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() clickTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;
  constructor(private service: TransferenciaService, private router: Router) {}
  transferir() {
    console.log('Solicitada nova transferência...');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.clearInputs();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  clearInputs() {
    this.valor = null;
    this.destino = null;
  }
}
