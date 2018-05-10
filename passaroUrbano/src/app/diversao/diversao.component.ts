import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'view-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {
  public ofertas: Array<Oferta>;
  public categoria = 'diversao';
  constructor(private ofertaService: OfertasService) {}

  async ngOnInit() {
    this.ofertas = await this.ofertaService.getOfertasPorCategoria(this.categoria);

    console.log(this.ofertas);
  }
}
