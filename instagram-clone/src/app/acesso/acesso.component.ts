import { Component, OnInit, trigger, state, transition, style, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations: [trigger('anima-banner', [
    state('criado', style({ opacity: 1 })), // animate('duracao, delay, aceleracao')
    transition('void -> criado', [style({ opacity: 0, transform: 'translate(-90px, 0)'}), animate('1.5s 0s ease-in-out', keyframes([
      style({
        offset: 0.15,
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        offset: 0.30,
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        offset: 0.50,
        transform: 'translateY(25px)'
      }),
      style({
        offset: 0.70,
        transform: 'translateY(-25px)'
      }),
      style({
        offset: 1,
        transform: 'translateY(0px)'
      })
    ]))])
  ]),
  trigger('anima-user', [
    state('criado', style({ opacity: 1 })),
    transition('void -> criado',
      [
        style({ opacity: 0, transform: 'translate(90px, 0)'}),
        animate('1.5s 0s ease-in-out', keyframes([
            style({
              offset: 0.15,
              opacity: 1,
              transform: 'translateX(0)'
            }),
            style({
              offset: 0.30,
              opacity: 1,
              transform: 'translateX(0)'
            }),
            style({
              offset: 0.50,
              transform: 'translateY(-25px)'
            }),
            style({
              offset: 0.70,
              transform: 'translateY(25px)'
            }),
            style({
              offset: 1,
              transform: 'translateY(0px)'
            })
          ])
        )
      ]
    )
  ])
  ]
})
export class AcessoComponent implements OnInit {
  public estadoBanner = 'criado';
  public estadoUser = 'criado';
  public cadastro = false;
  constructor() { }

  ngOnInit() {
  }

  public recebeCadastro(componentName: string): void {
    this.cadastro = componentName === 'cadastro' ? true : false;
  }
}
