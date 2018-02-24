import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';



export interface RandomQuoteContext {
  // The quote's category: 'nerdy', 'explicit'...
  category: string;
}

@Injectable()
export class GetData {

  constructor(private http: HttpClient) { }

  getData() {
    this.http
      .get(`https://jsonplaceholder.typicode.com/posts/2`)// trzeba podmienić na nasze dane
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
