import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cards } from 'src/data/cards';
import { HttpService } from 'src/http.service';
import { ICard } from 'src/types/cards.type';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
  providers: [HttpService],
})
export class SummaryPageComponent implements OnInit, OnDestroy {
  cards: ICard[] = cards;
  allCardsNumbers: number = 0;
  subscription: Subscription;
  isDataLoaded = false;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.subscription = this.http.getData().subscribe((transactions) => {
      setTimeout(() => (this.isDataLoaded = true), 500); // - to show preloader
      this.allCardsNumbers = transactions.length;
      transactions.forEach((item) => {
        cards.map((card) => {
          if (card.title.toLowerCase().includes(item.type)) {
            return { ...card, transactionsNumber: card.transactionsNumber++ };
          } else {
            return card;
          }
        });
      });
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.cards.forEach((card) => (card.transactionsNumber = 0));
  }
}
