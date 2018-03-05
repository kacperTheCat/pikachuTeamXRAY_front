import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {  HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';
import { map, catchError } from 'rxjs/operators';



export interface Image {
  base64: string;
}

const datas = 'https://jsonplaceholder.typicode.com/photos/1';
// http://localhost:3000/profiles/1

@Injectable()
export class GetData {

  constructor(private http: HttpClient) { }


  getData() {
  return this.http
      .get(this.newMethod());
  }

  private newMethod(): string {
    return `http://localhost:61182/api/camera`;
  }


}
