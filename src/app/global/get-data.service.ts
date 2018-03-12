import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';
import { map, catchError } from 'rxjs/operators';

export interface Image {
  base64: string;
}
export interface DeviceInfo {
  version: string;
  deviceName: string;
  ipAddress: string;
}



@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData(datas: any) {
    return this.http
      .get(datas);
  }

  postData(db:any, postedData: any) {
   return this.http
    .post(db, postedData);
  }
}
