import { Component, OnInit } from '@angular/core';
import { cards } from 'src/data/cards';
import { navigatorLinks } from 'src/data/links';
import { ICard } from 'src/types/cards.type';
import { ILink } from 'src/types/link.type';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent implements OnInit {
  cards: ICard[] = cards;

  constructor() {}

  ngOnInit(): void {}
}
