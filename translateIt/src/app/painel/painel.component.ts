import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../utils/frase.model';
import { frases } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public answer = '';
  public progresso = 0;
  public tentativas = 3;
  @Output() public encerrarJogo = new EventEmitter();
  public frases = frases;
  public advice = 'Tenha calma e não gaste suas chances.';
  public title = 'Traduza essa frase';
  public rodada = 0;
  public rodadaFrase: Frase;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {}

  public sendAnswer(event: Event): void {
    if (this.answer === this.rodadaFrase.fraseBr) {
      if (this.rodada === 4) {
        alert('Você venceu o jogo!');
        this.encerrarJogo.emit('vitoria');
      } else {
        this.rodada++;
        this.rodadaFrase = frases[this.rodada];
      }
      this.answer = '';
      this.progresso = this.progresso + 25;
    } else {
      this.tentativas--;
      if (this.tentativas <= 0) {
        alert('Suas tentativas se esgotaram');
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = frases[this.rodada];
  }
}
