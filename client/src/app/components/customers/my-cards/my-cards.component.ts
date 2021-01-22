import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/interface/cards';
import { AuthService } from 'src/app/services/auth.service';
import { CordService } from 'src/app/services/cord.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {

  // id for link
  customerId: string = '';

  // for subscribe to get all cards
  allCards: Cards[] = [];
  constructor(
    private cardService: CordService,
    private authService: AuthService
  ) {
    this.allCards = []
    this.cardService.getMyCards();
    this.customerId = this.authService.id;
    console.log(this.allCards);
    console.log(this.authService.token);
    console.log(this.cardService.token);

  }

  ngOnInit(): void {
    // subscribe to get the cards
    if (this.cardService.allCardsObservable$) {
      this.cardService.allCardsObservable$.subscribe((data) => {
        console.log(data);
        console.log(this.allCards)
        this.allCards = data;
      });
    }
  }

}
