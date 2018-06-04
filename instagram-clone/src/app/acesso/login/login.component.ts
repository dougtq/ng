import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { HandlerService } from '../../error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() public cadastro = new EventEmitter<string>();

  public loading = false;

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'senha': new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService, private handler: HandlerService) { }

  ngOnInit() {}

  public alteraComponente(): void {
    this.cadastro.emit('cadastro');
  }

  async executaLogin() {
    this.loading = true;

    const { email, senha } = this.formulario.value;
    this.authService.logarUsuario({ email, senha });

    this.loading = false;
  }
}
