import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { ITransaction, transactionTypes } from 'src/types/transaction';
import { ILink } from 'src/types/link';
import { navigatorLinks } from 'src/data/links';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  providers: [HttpService],
})
export class NavigatorComponent implements OnInit, OnDestroy, DoCheck {
  transactions: ITransaction[];
  navigatorLinks: ILink[] = navigatorLinks;
  visibleTransactions: ITransaction[];
  routerSubscription: Subscription;
  httpSubscription: Subscription;
  currentRouteTab: number = 0;
  transactionTypes = transactionTypes;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && event.url.includes('tab')) {
        this.currentRouteTab = Number(event.url.slice(event.url.length - 1));
      }
    });

    this.httpSubscription = this.httpService.getData().subscribe({
      next: (responce) => {
        this.transactions = responce.map((transaction) => ({
          ...transaction,
          amount: Math.round(
            Math.random() * 100 * 10 ** Math.round(Math.random() * 7)
          ),
        }));
        console.log(this.transactions, this.currentRouteTab);
      },
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }
  ngDoCheck(): void {
    if (this.transactions) {
      const transactionType = this.transactionTypes[this.currentRouteTab];
      this.visibleTransactions = this.transactions.filter(
        (item) => item.type === transactionType
      );
    }
  }
}
