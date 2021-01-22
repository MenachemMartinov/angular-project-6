import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-page-not-fund',
  templateUrl: './page-not-fund.component.html',
  styles: [],
})
export class PageNotFundComponent implements OnInit {
  // is logged to know what button t6o show
  isLogged: boolean = false;

  // import the services what need for this component
  constructor(private authService: AuthService) {
    // change the is logged to true or false
    this.isLogged = this.authService.isLogged;
  }

  ngOnInit(): void {}
}
