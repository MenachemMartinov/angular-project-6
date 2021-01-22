import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cards } from 'src/app/interface/cards';
import { CordService } from 'src/app/services/cord.service';

@Component({
  selector: 'app-new-cards',
  templateUrl: './new-cards.component.html',
  styles: [],
})
export class NewCardsComponent implements OnInit {
  // first reset card
  newCard: Cards = {
    bizName: '',
    bizDescription: '',
    bizAddress: '',
    bizPhone: '',
    bizImage: '',
  };

  constructor(private cardService: CordService) {}

  // create new card
  onSubmit({ valid, value }: NgForm) {
    this.cardService.newCard(valid, value);
  }

  // reset card
  resetForm(customerForm: NgForm) {
    customerForm.resetForm({
      bizName: '',
      bizDescription: '',
      bizAddress: '',
      bizPhone: '',
      bizImage: '',
    });
  }

  ngOnInit(): void {}
}
