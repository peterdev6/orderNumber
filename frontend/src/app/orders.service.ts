import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(number: string): Observable<any> {
    return this.http.get(`http://localhost:3000/orders/${number}`);
  }
}
