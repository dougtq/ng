import { Component, OnInit } from '@angular/core';


import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'view-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: Array<Oferta>;
  public categoria = 'restaurante';

  constructor(private ofertaService: OfertasService) { }

  async ngOnInit() {
    try {
      this.ofertas = await this.ofertaService.getOfertasPorCategoria(this.categoria);
    } catch (error) {
      this.ofertas = [];
    }
  }

}
