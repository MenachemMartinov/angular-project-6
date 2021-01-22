import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { ProfileComponent } from './components/customers/profile/profile.component';
import { ProfileEditComponent } from './components/customers/profile-edit/profile-edit.component';
import { CardsComponent } from './components/customers/cards/cards.component';
import { EditCardsComponent } from './components/customers/edit-cards/edit-cards.component';
import { NewCardsComponent } from './components/customers/new-cards/new-cards.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SubscribeComponent } from './components/auth/subscribe/subscribe.component';
import { PageNotFundComponent } from './components/auth/page-not-fund/page-not-fund.component';
import { MessagesToUserComponent } from './components/dashboard/messages-to-user/messages-to-user.component';
import { ContainerComponent } from './components/dashboard/container/container.component';
import { LogOutDirective } from './directives/log-out.directive';
import { MyCardsComponent } from './components/customers/my-cards/my-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    ProfileComponent,
    ProfileEditComponent,
    CardsComponent,
    EditCardsComponent,
    NewCardsComponent,
    LoginComponent,
    SubscribeComponent,
    PageNotFundComponent,
    MessagesToUserComponent,
    ContainerComponent,
    LogOutDirective,
    MyCardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
