import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/interface/cards';
import { AuthService } from 'src/app/services/auth.service';
import { CordService } from 'src/app/services/cord.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  // id for link
  customerId: string = '';

  // for subscribe to get all cards
  allCards: Cards[];
  constructor(
    private cardService: CordService,
    private authService: AuthService
  ) {
    this.cardService.allCards();
    this.customerId = this.authService.id$;
    console.log(this.allCards);
  }

  ngOnInit(): void {
    // subscribe to get the cards
    if (this.cardService.allCardsObservable$) {
      this.cardService.allCardsObservable$.subscribe((data) => {
        console.log(data);

        this.allCards = data;
      });
    }
  }
}
