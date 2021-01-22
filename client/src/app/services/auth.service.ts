import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../interface/customer';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // the user id end user token
  token: string = '';
  id: string = '';

  // if the user is logged this go to be true
  isLogged = false;

  // user info
  user: any = null;

  // url to deferent path
  //basic url
  readonly basicUrl = '/api';
  // url for login
  readonly urlLogin = `/dashboard`;
  //url to subscribe
  readonly urlSubscribe = '/users/newUser';

  constructor(
    public router: Router,
    public http: HttpClient,
    private injector: Injector
  ) {}

  // subscribe user
  subscribe(valid, value) {
    if (valid) {
      //  headers
      const headers = new HttpHeaders()
        .set('auth-token', `${this.token}`)
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
      this.http
        .post<Customer>(
          `${this.basicUrl}/users/newUser`,
          JSON.stringify(value),
          {
            headers: headers,
          }
        )
        .subscribe((data: any) => {
          console.log(data);
          window.localStorage.clear();
          window.localStorage.removeItem('token');
          this.router.navigate([``]);
        });
    }
  }

  // login user
  login(valid, value) {
    if (valid) {
      const headers = new HttpHeaders()
        .set('auth-token', `${this.token}`)
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
      this.http
        .post<Customer>(
          `${this.basicUrl}/auth/loginUser`,
          JSON.stringify(value),
          {
            headers: headers,
          }
        )
        .subscribe((data: any) => {
          console.log(data);

          window.localStorage.clear();
          window.localStorage.setItem('user', JSON.stringify(data.user));
          window.localStorage.setItem('token', data.token);
          this.getTokenEndNavigate();
        });
    }
  }

  // get token end id end logged to true end navigate
  getTokenEndNavigate() {
    this.token = window.localStorage.getItem('token');
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.id = this.user._id;
    console.log(this.id);

    if (!this.id) {
      return console.log('error', this.id);
    }
    this.isLogged = true;

    console.log(this.urlLogin);

    this.router.navigate([this.urlLogin, this.id, 'profile']);
  }

   getToken() {
    this.token = '';
    this.user = null;
    this.id = '';
    this.token = window.localStorage.getItem('token');
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.id = this.user._id;
    console.log(this.id);

    if (!this.id) {
      return console.log('error', this.id);
    }
  }

  logOut() {
    let { customerObservable$ } = this.injector.get(CustomerService);
    customerObservable$ = null;
    this.isLogged = false;
    window.localStorage.clear();
  }
}
