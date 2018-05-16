import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @Output() public cadastro = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public alteraComponente(): void {
    this.cadastro.emit('login');
  }
}
