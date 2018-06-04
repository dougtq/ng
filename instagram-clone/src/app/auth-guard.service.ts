import { Injectable } from '@angular/core';
import { CanActivate, Route, RouterStateSnapshot, ActivatedRouteSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService) {}

  canLoad(route: Route): boolean {
    return true;
  }

  public canActivate(): boolean {
    return this.auth.statusAutenticacao();
  }
}
