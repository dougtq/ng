import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { NavService } from './nav.service';
import { Nav } from '../shared/nav.model';
import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';

import '../utils/rxjs-ext';

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
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string, i: number): ObservableInput<Oferta[]> => {
        if (!termo.trim()) {
          return Observable.of<Array<Oferta>>([]);
        }
        return this.ofertaService.pesquisaOferta(termo);
      })
      .catch((err: any): ObservableInput<Oferta[]> => {
        return Observable.of<Array<Oferta>>([]);
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
