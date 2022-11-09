import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransaction } from './types/transaction.type';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    const responce = this.http.get<ITransaction[]>('assets/users.json');
    return responce;
  }
}
