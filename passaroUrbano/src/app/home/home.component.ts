import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Array<Oferta>;

  constructor(private ofertasService: OfertasService) {}

  async ngOnInit() {
    try {
      this.ofertas = await this.ofertasService.getOfertas();
    } catch (error) {
      this.ofertas = [];
    }
  }

}
