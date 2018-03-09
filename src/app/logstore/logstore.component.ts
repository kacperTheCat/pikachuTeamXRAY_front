import { Component, OnInit } from '@angular/core';
// import {CdkTableModule} from '@angular/cdk/table';
// import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-logstore',
  templateUrl: './logstore.component.html',
  styleUrls: ['./logstore.component.scss']
})
export class LogstoreComponent implements OnInit {
  dataSource: any;
  displayedColumns: any;
  constructor() { }
  ngOnInit() {
    const ELEMENT_DATA: Element[] = [
      {position: 1, name: 'Test', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Test', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Test', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Test', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Test', weight: 10.811, symbol: 'B'},
    ];
    
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = ELEMENT_DATA;
  }
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
