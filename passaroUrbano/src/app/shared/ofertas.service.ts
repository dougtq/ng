import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Oferta } from '../shared/oferta.model';
import { resolve } from 'url';

@Injectable()
export class OfertasService {
  private ofertas: Array<Oferta> = [];

  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUri + 'ofertas' + '?destaque=true')
        .toPromise()
        .then((res: any) => res.json())
        .then((ofertas: Array<Oferta>) => {
          this.ofertas = ofertas;
          resolve(this.ofertas);
        })
        .catch((err: Error) => {
          this.ofertas = [];
          return reject(err);
        });
    });
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUri + 'ofertas' + `?categoria=${categoria}`)
      .toPromise()
      .then((res: any) => res.json())
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas;
        resolve(this.ofertas);
      })
      .catch((err: Error) => {
        this.ofertas = [];
        return reject(err);
      });
    });
  }
}
