import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/interface/customer';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styles: [],
})
export class ProfileEditComponent implements OnInit {
  // form from the DB
  form: Customer;

  // get user info to user card
  user: any;

  constructor(
    private authService: AuthService,
    private customerService: CustomerService
  ) {
    this.user = this.authService.user;
    this.customerService.getCustomerInfo();
  }

  // send the form on submit
  onSubmit({ valid, value }: NgForm) {
    // go to function what send the value from auth service
    this.customerService.update(valid, value);
  }

  ngOnInit(): void {
    // subscribe to the observable to get data
    if (this.customerService.customerObservable) {
      this.customerService.customerObservable.subscribe((data) => {
        console.log(data);

        this.form = data;
      });
    }

  }
}
