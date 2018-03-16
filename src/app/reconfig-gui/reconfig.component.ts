import { Component, OnInit } from '@angular/core';
import { RTGMachines, SelectMachine } from '../global/address';
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

  dataSource: any = [];
  error: any;
  titleSaveButton = 'Save';
  selectedValue: number;
  machineIndex: object;
  connectionInfo: string;

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


  sendMachine() {
    if (this.selectedValue === undefined) {
      this.connectionInfo = 'Select machine';
    }
    this.machineIndex = { 'chosenMachineID': this.selectedValue }
    console.log(this.machineIndex);
    const response = this.getMachine.postData(SelectMachine, this.machineIndex)
    .subscribe(
      (response) =>{
        console.log(response);
      }
    )
    ;
  }
  onSubmit() {
    this.machineIndex = { 'chosenMachineID': this.selectedValue };
    this.sendMachine();
    this.connectionInfo = `Connected with machine #${this.selectedValue}`;
  }

}
