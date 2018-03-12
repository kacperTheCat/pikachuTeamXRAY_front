import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../global/get-data.service';

@Component({
  selector: 'app-logstore',
  templateUrl: './logstore.component.html',
  styleUrls: ['./logstore.component.scss']
})

export class LogstoreComponent implements OnInit {

  dataSource: any;
  displayedColumns: any;
  jsonUrl: String = 'http://localhost:61182/api/auditlogs';
  error: any;
  light: any;
  contrast: any;
  blackWhite: any;
  patientName: string;
  user: any;
  imageDate: any;
  imageTime: any;

  constructor(private getLogData: GetDataService) { }

  getDatas() {
    this.getLogData.getData(this.jsonUrl)
      .subscribe(
        (datas: Logs) => {
          this.light = datas.light;
          this.contrast = datas.contrast;
          this.blackWhite = datas.blackWhite;
          this.patientName = datas.patientName;
          this.user = datas.user;
          this.imageDate = datas.imageDate;
          this.imageTime = datas.imageTime;
          this.dataSource = datas;
        },
        (error: string) => {
          this.error = error;
          console.log('Error, no data'); // need to full error handle
        });
  }

  ngOnInit() {
    this.getDatas();
    this.displayedColumns = ['light', 'contrast', 'blackWhite', 'patientName', 'user', 'imageDate', 'imageTime'];
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


