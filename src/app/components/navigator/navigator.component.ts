import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { ITransaction } from 'src/types/types';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  providers: [HttpService],
})
export class NavigatorComponent implements OnInit {
  transactions: ITransaction[] = [];

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
