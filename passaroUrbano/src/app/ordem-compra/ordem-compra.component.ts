import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'view-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;
  public idCompra: number;
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {}

  confirmaCompra(): void {
    const pedido: Pedido = new Pedido(this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
      );
    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((id: number) => {
        this.idCompra = id;
        console.log(this.idCompra);
      }, (err) => {
      });
  }
}
