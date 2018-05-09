import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Oferta } from '../shared/oferta.model';

@Injectable()
export class OfertasService {
  private ofertas: Array<Oferta> = [];

  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/' + 'ofertas' + '?destaque=true')
        .toPromise()
        .then((res: any) => res.json())
        .then((ofertas: any) => {
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
