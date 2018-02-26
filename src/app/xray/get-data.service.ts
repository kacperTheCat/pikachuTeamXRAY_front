import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {  HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';
import { map, catchError } from 'rxjs/operators';


const datas = 'https://jsonplaceholder.typicode.com/photos/1';

@Injectable()
export class GetData {

  constructor(private http: HttpClient) { }


  getData() {
  return this.http
      .get(`https://jsonplaceholder.typicode.com/photos/1`); // trzeba podmienić na nasze dane
  }

  // getData() {
  //   this.http
  //     .get(`https://jsonplaceholder.typicode.com/posts/2`)// trzeba podmienić na nasze dane
  //     .subscribe((data: any) => {
  //       console.log(data);
  //     });
  // }

}
