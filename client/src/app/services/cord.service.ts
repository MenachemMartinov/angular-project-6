import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cards } from '../interface/cards';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CordService {
  // all cards observable
  allCardsObservable$: Observable<any> = null;

  // card observable
  cardObservable$: Observable<Cards> = null;

  // card id end users token
  cardId: string = '';
  token: string = '';

  // get the token
  getToken() {
    this.token = window.localStorage.getItem('token');
  }

  //  headers
  private headers = new HttpHeaders()
    .set('auth-token', `${window.localStorage.getItem('token')}`)
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

  constructor(private router: Router, private authService: AuthService) {
    this.getToken()
  }



  // new card
  newCard(valid, value) {
    if (valid) {
      this.authService.http
        .post(
          `${this.authService.basicUrl}/cards/newCard`,
          JSON.stringify(value),
          {
            headers: this.headers,
          }
        )
        .subscribe((data: any) => {
          console.log(data);
          this.router.navigate([
            '/dashboard',
            this.authService.id,
            'cards',
            'all-cards',
          ]);
        });
    }
  }

  // get all cards
  async allCards() {
    await this.getToken();

    const headers = new HttpHeaders()
    .set('auth-token', `${this.token}`)
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    this.allCardsObservable$ = this.authService.http.get(
      `${this.authService.basicUrl}/cards/allCards`,
      {
        headers: headers,
      }
    );
  }
  // get my cards
  async getMyCards() {
    await this.getToken();

    const headers = new HttpHeaders()
    .set('auth-token', `${this.token}`)
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    this.allCardsObservable$ = this.authService.http.get(
      `${this.authService.basicUrl}/cards/myCards`,
      {
        headers: headers,
      }
    );
  }

  // get single card
  getCardInfo() {
    console.log(this.cardId);

    const headers = new HttpHeaders()
    .set('auth-token', `${this.token}`)
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    this.cardObservable$ = this.authService.http.get<Cards>(
      `${this.authService.basicUrl}/cards/${this.cardId}`,
      {
        headers: headers,
      }
    );
  }

  // update card
  updateCard(valid, value) {
    if (valid) {
      console.log(this.cardId);

      const headers = new HttpHeaders()
        .set('auth-token', `${this.token}`)
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
      this.authService.http
        .put(
          `${this.authService.basicUrl}/cards/${this.cardId}`,
          JSON.stringify(value),
          {
            headers: headers,
          }
        )
        .subscribe((data: any) => {
          console.log(data);
        });
    }
  }
}
