import { Component, OnInit, Inject } from '@angular/core';
import { GetDataService, Image } from '../global/get-data.service';
import { logsApi } from '../global/address';
import { MatTableDataSource, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

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
  img: string; 
  
  constructor(private getLogData: GetDataService, public dialog: MatDialog) { }


  getDatas() {
    this.getLogData.getData(logsApi)
      .subscribe(
        (datas: any) => {
          this.dataSource = new Mat
          
          
          leDataSource(datas);
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
      'xRayImageName'
    ];
  }

  applyFilter(filterValue: string) {
    filterValue.trim(); // Remove whitespace
    filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(imgSrc: string) {
    this.getLogData.getData(`${logsApi}/${imgSrc}`)
      .subscribe(
        (img: Image) => {
          this.dialog.open(PhotoDialogComponent, {
            data: {
              img: `data:image/jpeg;base64,${img.base64}`
            }
          });

        },
        (error: string) => {
          this.error = error;
          console.log('server err'); // need to full error handle
        });
  }
}


@Component({
  selector: 'app-photo-dialog.component',
  templateUrl: 'photo-dialog.component.html',
})
export class PhotoDialogComponent {
  img: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}

