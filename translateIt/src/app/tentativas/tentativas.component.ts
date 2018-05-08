import { Component, OnChanges, Input } from '@angular/core';
import { Coracao } from '../utils/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges {
  @Input() public tentativas: number;
  public coracoes: Array<Coracao> = [new Coracao(true), new Coracao(true), new Coracao(true)];

  constructor() {}

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const index = this.coracoes.length - this.tentativas;
      this.coracoes[index - 1].cheio = false;
    }
  }
}
