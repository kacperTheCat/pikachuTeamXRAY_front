import { GetDataService } from "@app/global/get-data.service";
import { Injectable } from "@angular/core";
import { notImplemented } from "@angular/core/src/render3/util";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import { getTestData } from "./test-data";

@Injectable()
export class TestGetDataService extends GetDataService {
    counter: number = 0;
    constructor() {
        super(null);
    }

    getData(datas: any) {
        this.counter = this.counter%2;
        return Observable.of (getTestData() [this.counter++]);
        
      }
    
      postData(db:any, postedData: any): Observable<any> {
       throw new Error("notImplemented");
      }
}