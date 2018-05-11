import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
// import 'rxjs/Rx';

import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'view-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  subscribed: Subscription;
  protected id: number;
  public oferta: Oferta;
  public error: string;

  constructor(private activatedRoute: ActivatedRoute, private ofertaService: OfertasService) { }

  async ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params['id'];
    this.subscribed = this.activatedRoute.params.subscribe((param: any) => {
      this.id = param.id;
    }, (err: any) => {
      this.error = err.message;
    });

    try {
      this.oferta = await this.ofertaService.getOferta(this.id);
    } catch (error) {
      this.oferta = undefined;
    }

    // const observer = Observable.create((created: Observer<number>) => {
    //   created.next(1);
    // });

    // observer.subscribe((data: any) => {
    //   console.log(data);
    // });

    // let obs = Observable.interval(1000);
    // obs.subscribe((num: number) => console.log(num));
  }

  ngOnDestroy(): void {
    this.subscribed.unsubscribe();
  }

}
