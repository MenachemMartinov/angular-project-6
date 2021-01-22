import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerLogin } from 'src/app/interface/customerLogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  // first reset form
  form: CustomerLogin = {
    id: '',
    email: '',
    password: '',
  };

  // import the services what need for this component
  constructor(private router: Router, private authService: AuthService) {
    if (window.localStorage.getItem('token')) {
      // login automatic with the local storage "token"
      this.authService.getTokenEndNavigate();
    }
  }

  // send the form on submit
  onSubmit({ valid, value }: NgForm) {
    // go to function what send the value from auth service
    this.authService.login(valid, value);
  }

  ngOnInit(): void {}
}
