import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../shared/ofertas.service';
import { OndeFica } from '../../shared/onde-fica.model';

@Component({
  selector: 'view-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
  public id: number;
  public ondeFica: string;
  public error: string;

  constructor(private activatedRoute: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(async (params: Params) => {
      this.id = params.id;
      try {
        this.ondeFica = await this.ofertasService.getOndeFica(this.id);
      } catch (error) {
        this.error = error.message;
      }
    });

  }

}
