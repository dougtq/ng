import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Imagem } from '../../shared/img.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [trigger('banner', [
    state('escondido',
      style({
        opacity: 0
      })),
    state('visivel',
      style({
        opacity: 1
      })
    ),
    transition('escondido <=> visivel', animate('0.5s ease-in-out')),
  ])]
})
export class BannerComponent implements OnInit {
  public estado = 'escondido';
  public imgs: Array<Imagem> = [
    {
      estado: 'visivel',
      url: 'assets/banner-acesso/img_1.png'
    },
    {
      estado: 'visivel',
      url: 'assets/banner-acesso/img_2.png'
    },
    {
      estado: 'escondido',
      url: 'assets/banner-acesso/img_3.png'
    },
    {
      estado: 'escondido',
      url: 'assets/banner-acesso/img_4.png'
    },
    {
      estado: 'escondido',
      url: 'assets/banner-acesso/img_5.png'
    },
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.rotacao(), 3000);
  }

  public mudaEstado(): void {
    this.estado = this.estado === 'visivel' ? 'escondido' : 'visivel';
  }

  public rotacao(): void {

    let idNext: number;

    for (let i = 0; i <= 4; i++) {
      if (this.imgs[i].estado === 'visivel') {
        this.imgs[i].estado = 'escondido';
        idNext = i >= 4 ? 0 : i + 1;
        break;
      }
    }

    this.imgs[idNext].estado = 'visivel';

    setTimeout(() => this.rotacao(), 3000);
  }
}
