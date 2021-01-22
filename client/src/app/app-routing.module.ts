import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFundComponent } from './components/auth/page-not-fund/page-not-fund.component';
import { SubscribeComponent } from './components/auth/subscribe/subscribe.component';
import { CardsComponent } from './components/customers/cards/cards.component';
import { EditCardsComponent } from './components/customers/edit-cards/edit-cards.component';
import { MyCardsComponent } from './components/customers/my-cards/my-cards.component';
import { NewCardsComponent } from './components/customers/new-cards/new-cards.component';
import { ProfileEditComponent } from './components/customers/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/customers/profile/profile.component';
import { ContainerComponent } from './components/dashboard/container/container.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'subscribe',
    component: SubscribeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/:id',
    component: ContainerComponent,
    children: [
      {
        path: 'profile',
        children: [
          { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
          {
            path: 'edit',
            component: ProfileEditComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
      {
        path: 'cards',
        children: [
          {
            path: 'all-cards',
            component: CardsComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'my-cards',
            component: MyCardsComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'new-cards',
            component: NewCardsComponent,
            canActivate: [AuthGuard],
          },
          {
            path: ':id/edit-card',
            component: EditCardsComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'pageNotFund',
    component: PageNotFundComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'pageNotFund', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
