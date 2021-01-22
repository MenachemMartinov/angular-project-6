import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  user: any;
  _$ = '    ';
  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }

  ngOnInit(): void {}
}
