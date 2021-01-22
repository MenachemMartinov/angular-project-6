import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (state.url === '/') {
      if (this.authService.isLogged === true) {
        return this.router.createUrlTree([
          '/dashboard',
          this.authService.id$,
          'profile',
        ]);
      }

      return true;
    }

    if (state.url === '/subscribe') {
      if (this.authService.isLogged === true) {
        return this.router.createUrlTree([
          '/dashboard',
          this.authService.id$,
          'profile',
        ]);
      }

      return true;
    }

    if (this.authService.isLogged === true) {
      return true;
    }

    if (
      state.url === '/login' ||
      state.url === '/subscribe' ||
      state.url === '/pageNotFund'
    ) {
      return true;
    }

    return this.router.createUrlTree(['/login']);
  }

  constructor(private router: Router, private authService: AuthService) {}
}
