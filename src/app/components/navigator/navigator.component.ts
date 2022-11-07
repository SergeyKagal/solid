import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../http.service';
import { ITransaction } from 'src/types';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  providers: [HttpService],
})
export class NavigatorComponent implements OnInit {
  transactions: ITransaction[] = [];

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    console.log(this.route.queryParams);
    this.httpService.getData().subscribe({ next: (x) => console.log(x) });
  }
}
