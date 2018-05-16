import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() public cadastro = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  public alteraComponente(): void {
    console.log('Emitiu evento');
    this.cadastro.emit('cadastro');
  }

}
