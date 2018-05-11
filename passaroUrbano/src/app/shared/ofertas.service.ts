import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import { Oferta } from '../shared/oferta.model';
import { ComoUsar } from './como-usar.model';
import { OndeFica } from './onde-fica.model';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class OfertasService {
  private ofertas: Array<Oferta> = [];
  private oferta: Oferta;
  private comoUsar: ComoUsar;
  private ondeFica: OndeFica;

  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUri + 'ofertas' + '?destaque=true')
        .toPromise()
        .then((res: Response) => res.json())
        .then((ofertas: Array<Oferta>) => {
          return resolve(ofertas);
        })
        .catch((err: Error) => {
          return reject(err);
        });
    });
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUri + 'ofertas' + `?categoria=${categoria}`)
      .toPromise()
      .then((res: Response) => res.json())
      .then((ofertas: Array<Oferta>) => {
        resolve(ofertas);
      })
      .catch((err: Error) => {
        return reject(err);
      });
    });
  }

  public getOferta(id: number): Promise<Oferta> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUri + 'ofertas' + `?id=${id}`)
      .toPromise()
      .then((res: Response) => res.json().shift())
      .then((oferta: Oferta): void => {
        return resolve(oferta);
      })
      .catch((err: Error) => {
        return reject(err);
      });
    });
  }

  public getOndeFica(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUri + 'onde-fica' + `?id=${id}`)
      .toPromise()
      .then((res: Response) => res.json().shift().descricao)
      .then((ondeFica: string): void => {
        return resolve(ondeFica);
      })
      .catch((err: Error) => {
        return reject(err);
      });
    });
  }

  public getComoUsar(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUri + 'como-usar' + `?id=${id}`)
      .toPromise()
      .then((res: Response) => res.json().shift().descricao)
      .then((comoUsar: string) => {
        resolve(comoUsar);
      })
      .catch((err: Error) => {
          return reject(err);
      });
    });
  }

  public pesquisaOferta(termo: string): Observable<Array<Oferta>> {
    return this.http.get(environment.apiUri + 'ofertas' + `?descricao_oferta_like=${termo}`)
      .retry(3)
      .map((res) => res.json());
  }
}
