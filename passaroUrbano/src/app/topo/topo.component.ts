import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NavService } from './nav.service';
import { Nav } from '../shared/nav.model';
import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';

@Component({
  selector: 'view-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [NavService, OfertasService]
})
export class TopoComponent implements OnInit {
  public navs: Array<Nav>;
  public ofertas: Array<Oferta>;
  public subjectPesquisa: Subject<string> = new Subject<string>();
  public observablePesquisa: Observable<Array<Oferta>>;

  constructor(private navService: NavService, private ofertaService: OfertasService) { }

  ngOnInit() {
    this.navs = this.navService.getNavLinks();
    this.observablePesquisa = this.subjectPesquisa
      .debounceTime(2000)
      .switchMap((termo: string, i: number): ObservableInput<Oferta[]> => {
        if (!termo.trim()) {
          return Observable.of<Array<Oferta>>([]);
        }
        return this.ofertaService.pesquisaOferta(termo);
      });

    this.observablePesquisa.subscribe((ofertas: Array<Oferta>) => {
      this.ofertas = ofertas;
    });
  }

  public pesquisa(termo: string): void {
    // console.log((<HTMLInputElement>e.target).value);
    this.subjectPesquisa.next(termo);
  }

}
