import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interface/customer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // the user id end user token
  token: string = '';
  id: string = '';

  customerObservable$: Observable<Customer> = null;

  // go to AuthService
  authService = null;
  constructor(private http: HttpClient, private injector: Injector) {
    this.authService = injector.get(AuthService);
    this.getToken();
  }

  getToken() {
    this.token = '';
    this.id = '';
    this.token = window.localStorage.getItem('token');

    if (!this.id) {
      return console.log('error', this.id);
    }
  }

  async getCustomerInfo() {
    await this.authService.getToken();

    const headers = new HttpHeaders()
      .set('auth-token', `${this.authService.token}`)
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.customerObservable$ = this.http.get<Customer>(
      `${this.authService.basicUrl}/users/user-details`,
      { headers: headers }
    );
  }

  // update user
  update(valid, value) {
    if (valid) {
      //  headers
      const headers = new HttpHeaders()
        .set('auth-token', `${this.token}`)
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
      this.http
        .put<Customer>(
          `${this.authService.basicUrl}/users/${this.authService.id}`,
          JSON.stringify(value),
          {
            headers: headers,
          }
        )
        .subscribe(console.log);
    }
  }
}
