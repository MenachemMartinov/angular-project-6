import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/interface/NavItem';
import { AuthService } from 'src/app/services/auth.service';
import { CordService } from 'src/app/services/cord.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'profile',
      icon: 'fas fa-flag',
      link: `/dashboard/${this.authService.id}/profile`,
    },
    {
      title: 'profile edit',
      icon: 'fas fa-flag',
      link: `/dashboard/${this.authService.id}/profile/edit`,
    },
    {
      title: 'all-cards',
      icon: 'fas fa-flag',
      link: `/dashboard/${this.authService.id}/cards/all-cards`,
    },
    {
      title: 'my-cards',
      icon: 'fas fa-flag',
      link: `/dashboard/${this.authService.id}/cards/my-cards`,
    },
    {
      title: 'new-cards',
      icon: 'fas fa-flag',
      link: `/dashboard/${this.authService.id}/cards/new-cards`,
    },
    {
      title: 'edit-cards',
      icon: 'fas fa-hand-point-up',
      link: `/dashboard/${this.authService.id}/cards/${this.cardServices.cardId}/edit-card`,
    },
    {
      title: 'pageNotFund',
      icon: 'fas fa-hand-point-up',
      link: '/pageNotFund',
    },
  ];

  constructor(
    private authService: AuthService,
    private cardServices: CordService
  ) {}

  ngOnInit(): void {}
}
