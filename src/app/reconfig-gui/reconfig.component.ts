import { Component, OnInit } from '@angular/core';
import { RTGMachines } from '../global/address';
import { environment } from '@env/environment';
import { GetDataService } from '../global/get-data.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-reconfig',
  templateUrl: './reconfig.component.html',
  styleUrls: ['./reconfig.component.scss']
})
export class ReconfigComponent implements OnInit {

  version: string = environment.version;
  dataSource: any= [];
  error: any;
  displayedColumns: any;

  constructor(private getMachine: GetDataService) { }

  getMachines() {
    this.getMachine.getData(RTGMachines)
      .subscribe(
        (datas: any) => {
          this.dataSource = new MatTableDataSource(datas);
        },
        (error: string) => {
          this.error = error;
          console.log('Error, no data'); // need to full error handle
        });
  }

  ngOnInit() {
    this.getMachines();
    this.displayedColumns = ['machine'];
   }
}

export interface MachinesID {
  machine: any;
}
