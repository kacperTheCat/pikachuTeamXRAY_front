import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../global/get-data.service';
import { jsonUrl } from '../global/address';

@Component({
  selector: 'app-logstore',
  templateUrl: './logstore.component.html',
  styleUrls: ['./logstore.component.scss']
})

export class LogstoreComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: any;
  error: any;
  light: any;
  contrast: any;
  blackWhite: any;
  patientName: string;
  user: any;
  imageDate: any;
  imageTime: any;
  tab: any[];

  constructor(private getLogData: GetDataService) { }

  getDatas() {
    this.getLogData.getData(jsonUrl)
      .subscribe(
        (datas: any) => {
          this.dataSource = datas;
        },
        (error: string) => {
          this.error = error;
          console.log('Error, no data'); // need to full error handle
        });
  }

  ngOnInit() {
    this.getDatas();
    this.displayedColumns = [
      'light',
      'contrast',
      'negative',
      'patientName',
      'user',
      'imageDate',
      'imageTime',
      'idMachine'];
  }

}

export interface Logs {
  light: any;
  contrast: any;
  blackWhite: any;
  patientName: string;
  user: string;
  imageDate: string;
  imageTime: string;
}


