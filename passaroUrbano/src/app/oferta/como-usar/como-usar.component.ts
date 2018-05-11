import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../shared/ofertas.service';
import { ComoUsar } from '../../shared/como-usar.model';

@Component({
  selector: 'view-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
  public id: number;
  public comoUsar: string;
  public error: string;

  constructor(private activatedRoute: ActivatedRoute, private ofertasService: OfertasService) { }

  async ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params['id'];
    try {
      this.comoUsar = await this.ofertasService.getComoUsar(this.id);
    } catch (error) {
      this.error = error.message;
    }
  }

}
