import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../usuario.model';
import { AuthService } from '../../auth.service';
import { HandlerService } from '../../error-handler.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @Output() public cadastro = new EventEmitter<string>();
  public usuario: Usuario;
  public isLoading = false;

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'nome_completo': new FormControl(null, [Validators.required, Validators.minLength(10)]),
    'usuario': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  constructor(private authService: AuthService, private handler: HandlerService) { }

  ngOnInit() {
  }

  public alteraComponente(): void {
    this.cadastro.emit('login');
  }

  async cadastrarUsuario() {
    this.isLoading = true;
    this.usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.usuario,
      this.formulario.value.senha);

    this.authService.cadastrarUsuario(this.usuario);
    this.isLoading = false;
  }
}
