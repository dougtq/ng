import { Component, OnInit } from '@angular/core';

import { NavService } from './nav.service';
import { Nav } from '../shared/nav.model';
import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'view-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [NavService, OfertasService]
})
export class TopoComponent implements OnInit {
  public navs: Array<Nav>;
  public ofertas: Observable<Array<Oferta>>;

  constructor(private navService: NavService, private ofertaService: OfertasService) { }

  ngOnInit() {
    this.navs = this.navService.getNavLinks();
  }

  public pesquisa(termo: string): void {
    // console.log((<HTMLInputElement>e.target).value);
    this.ofertas = this.ofertaService.pesquisaOferta(termo);
    this.ofertas.subscribe((ofertas: Array<Oferta>) => {
      console.log(ofertas);
    });
  }

}
