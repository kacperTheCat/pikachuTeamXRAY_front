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
      .get(`http://10.28.68.119/api/camera`); // trzeba podmienić na nasze dane
  }
}
