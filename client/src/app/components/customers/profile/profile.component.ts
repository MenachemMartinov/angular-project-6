import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }
  ngOnInit(): void {
  }

}
