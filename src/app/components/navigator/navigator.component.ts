import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { ITransaction } from 'src/types/transaction';
import { ILink } from 'src/types/link';
import { navigatorLinks } from 'src/data/links';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  providers: [HttpService],
})
export class NavigatorComponent implements OnInit {
  transactions: ITransaction[] = [];
  navigatorLinks: ILink[] = navigatorLinks;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe({
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
  }
}
