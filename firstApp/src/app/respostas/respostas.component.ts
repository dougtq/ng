import { Component, OnInit } from '@angular/core';
import { Frase } from '../utils/frase.model';
import { frases } from './frase-mock';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit {
  protected frases = frases;
  public answer = '';
  protected title = 'Traduza essa frase';
  protected advice = 'Tenha calma e não gaste suas chances.';

  private rodada = 0;
  private rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = frases[this.rodada];
  }

  ngOnInit() {}

  public sendAnswer(event: Event): void {
    if (this.answer === this.rodadaFrase.fraseBr) {
      console.log('correto')
    } else {
      console.log('errado')
    }
  }

}
