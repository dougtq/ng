import { Component, OnInit } from '@angular/core';
import { Frase } from '../utils/frase.model';
import { frases } from './frase-mock';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit {
  public frases = frases;
  public answer = '';
  protected title = 'Traduza essa frase';

  constructor() { }

  ngOnInit() {
  }

}
