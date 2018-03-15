import { Component, OnInit } from '@angular/core';
import { RTGMachines } from '../global/address';
import { environment } from '@env/environment';
import { GetDataService } from '../global/get-data.service';
import { MatTableDataSource, MatSelect } from '@angular/material';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-reconfig',
  templateUrl: './reconfig.component.html',
  styleUrls: ['./reconfig.component.scss']
})
export class ReconfigComponent implements OnInit {

  dataSource: any= [];
  error: any;
  titleSaveButton = "Save"; 
  selectedValue: number;

  constructor(private getMachine: GetDataService) { }
  
  getMachines() {
    this.getMachine.getData(RTGMachines)
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
     this.getMachines();
   }
  
}
