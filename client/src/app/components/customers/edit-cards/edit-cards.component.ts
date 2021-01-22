import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cards } from 'src/app/interface/cards';
import { CordService } from 'src/app/services/cord.service';

@Component({
  selector: 'app-edit-cards',
  templateUrl: './edit-cards.component.html',
  styles: [],
})
export class EditCardsComponent implements OnInit {
  card: Cards = null;

  constructor(
    private cardService: CordService,
     activateRoute: ActivatedRoute
  ) {

    activateRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data?.id);
      this.cardService.cardId = data?.id;
    });
    this.cardService.getCardInfo();
  }

  // update card
  onSubmit({ valid, value }: NgForm) {
    this.cardService.updateCard(valid, value);
  }

  ngOnInit(): void {
    console.log(this.cardService.cardObservable$);

    if (this.cardService.cardObservable$) {
      this.cardService.cardObservable$.subscribe((data: any) => {
        console.log(data);

        this.card = data;
      });
    }
  }
}
