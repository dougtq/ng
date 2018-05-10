import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../shared/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'view-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  protected id: number;
  public oferta: Oferta;

  constructor(private activatedRoute: ActivatedRoute, private ofertaService: OfertasService) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    try {
      this.oferta = await this.ofertaService.getOferta(this.id);
    } catch (error) {
      this.oferta = undefined;
    }
    // this.activatedRoute.params.subscribe((param: any) => {
    //   this.id = param.id;
    // });
  }

}
