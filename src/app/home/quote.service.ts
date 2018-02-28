import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

// const routes = {
//   quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
// };

export interface DeviceInfo {
  version: string;
  deviceName: string;
  ipAddress: string;
}

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) { }

  // getRandomQuote(context: RandomQuoteContext): Observable<string> {
  //   return this.http.get(routes.quote(context), { cache: true })
  //     .pipe(
  //       map((res: Response) => res.json()),
  //       map(body => body.value),
  //       catchError(() => of('Error, could not load joke :-('))
  //     );
  // }
  getConnectionDetails() {
    return this.http
    .get('http://10.28.68.119/api/connectiondetails');

  }

}
