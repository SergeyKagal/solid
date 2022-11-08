import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { ITransaction } from 'src/types/transaction';
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
export class NavigatorComponent implements OnInit, OnDestroy {
  transactions: ITransaction[];
  navigatorLinks: ILink[] = navigatorLinks;
  visibleTransactions: ITransaction[];
  routerSubscription: Subscription;
  httpSubscription: Subscription;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.httpSubscription = this.httpService.getData().subscribe({
      next: (responce) => {
        this.transactions = responce.map((transaction) => ({
          ...transaction,
          amount: Math.round(
            Math.random() * 100 * 10 ** Math.round(Math.random() * 7)
          ),
        }));
        console.log(this.transactions);
      },
    });
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }
}
