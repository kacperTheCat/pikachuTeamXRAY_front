import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../global/get-data.service';
import { jsonUrl } from '../global/address';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-logstore',
  templateUrl: './logstore.component.html',
  styleUrls: ['./logstore.component.scss']
})

export class LogstoreComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: any;
  error: any;
  light: number;
  contrast: number;
  negative: boolean;
  patientName: string;
  userName: string;
  imageDate: any;
  imageTime: any;
  machineID: any;

  constructor(private getLogData: GetDataService) { }

  getDatas() {
    this.getLogData.getData(jsonUrl)
      .subscribe(
        (datas: any) => {
          this.dataSource = new MatTableDataSource(datas);
          console.log(datas);
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
      'userName',
      'imageDate',
      'imageTime',
      'machineID'
    ];
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}


