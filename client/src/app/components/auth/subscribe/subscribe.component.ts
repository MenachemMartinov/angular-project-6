import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/interface/customer';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styles: [],
})
export class SubscribeComponent implements OnInit {
  // first reset form
  form: Customer = {
    id: '',
    name: '',
    email: '',
    password: '',
    biz: false,
  };

  // import the services what need for this component
  constructor(private authService: AuthService, private http: HttpClient) {}

  // user reset form
  resetForm(customerForm: NgForm) {
    customerForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  }

  // send the form on submit
  onSubmit({ valid, value }: NgForm) {
    // go to function what send the value from auth service
    this.authService.subscribe(valid, value);
  }

  ngOnInit(): void {}
}
