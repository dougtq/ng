import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth, database, FirebaseError } from 'firebase';

import { Usuario } from './acesso/usuario.model';
import { Login } from './shared/login.model';
import { HandlerService } from './error-handler.service';

@Injectable()
export class AuthService {
  public tokenId: string;
  public email: string;

  constructor(private router: Router, private handler: HandlerService) {}

  public cadastrarUsuario(usuario: Usuario): void {
    auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(async () => {
        delete usuario.senha;
        database()
          .ref(`users/${btoa(usuario.email)}`)
          .set(usuario);
        this.tokenId = await auth().currentUser.getIdToken();
        this.email = usuario.email;
        this.setTokenStorage();
        this.router.navigateByUrl('feed');
      })
      .catch((err: FirebaseError) => this.handler.handleError(err));
  }

  public getEmail(): string {
    return this.email || this.getTokenStorage('email');
  }

  public logarUsuario(usuario: Login): void {
    const { email, senha } = usuario;
    auth().signInWithEmailAndPassword(email, senha)
      .then(async (res) => {
        this.tokenId = await auth().currentUser.getIdToken();
        this.email = email;
        this.setTokenStorage();
        this.router.navigateByUrl('feed');
        // database()
        // .ref(`users/${btoa(email)}`)
        // .toJSON();
      })
      .catch((err) => {
        this.handler.handleError(err);
      });

  }

  public logOut(): void {
    this.tokenId = undefined;
    auth().signOut()
      .then(() => {
        this.removeTokenStorage();
        this.router.navigateByUrl('/');
      })
      .catch((err) => {
        this.handler.handleError(err);
      });
  }

  public statusAutenticacao(): boolean {
    if (!this.getTokenStorage('tokenId')) {
      this.router.navigateByUrl('/');
    }
    return !!this.getTokenStorage('tokenId');
  }

  private setTokenStorage(): void {
    sessionStorage.setItem('tokenId', this.tokenId);
    sessionStorage.setItem('email', this.email);
  }

  private getTokenStorage(key: string): string {
    return sessionStorage.getItem(key);
  }

  private removeTokenStorage(): void {
    return sessionStorage.clear();
  }
}
