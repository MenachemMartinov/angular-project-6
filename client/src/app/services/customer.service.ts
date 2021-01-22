import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interface/customer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerObservable: Observable<Customer> = null;

  //  headers
  readonly headers = new HttpHeaders()
    .set('auth-token', `${this.authService.token$}`)
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
  constructor(private authService: AuthService, private http: HttpClient) {}

  async getCustomerInfo() {
    await this.authService.getToken();
    console.log(this.authService.headers);
    this.customerObservable = this.http.get<Customer>(
      `${this.authService.basicUrl}/users/user-details`,
      { headers: this.headers }
    );
  }

  // update user
  update(valid, value) {
    if (valid) {
      this.http
        .put<Customer>(
          `${this.authService.basicUrl}/users/${this.authService.id$}`,
          JSON.stringify(value),
          {
            headers: this.headers,
          }
        )
        .subscribe(console.log);
    }
  }
}
