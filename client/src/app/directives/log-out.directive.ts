import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLogOut]'
})
export class LogOutDirective {
  @HostListener('click', ['$event'])
  async clickEvent(e: MouseEvent) {
    e.preventDefault();
    console.log('is working');

    await this.authService.logOut();
    this.router.navigate(['/']);
  }
  constructor(private authService: AuthService, private router: Router) { }

}
