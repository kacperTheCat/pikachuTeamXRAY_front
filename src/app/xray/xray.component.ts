import { url } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetData, Image } from './get-data.service';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/observable/interval'; // wird



@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})

export class XrayComponent implements OnInit {

  datas: string;
  constructor(private getData: GetData) { }
  previewOn = ``;

  comingImage: String = 'https://loremflickr.com/320/240';

  titleBtn = 'preview';
  titleCptBtn: any = 'capture';
  flag = false;
  error: any;
  disableBtn = true;

  // sub = Observable.interval(1000);
inter2:any;

  ngOnInit() { }

  getDataOnClick() {

    if (this.titleBtn === 'preview') {
      this.inter2 = setInterval(() => {
        this.getImage();
      }, 1000);

      this.titleBtn = 'stop prewiev';
      // if (this.titleBtn !== 'stop prewiev') {
      //   clearInterval(this.inter2);
      // }
    } else {
      this.titleBtn = 'preview';
      clearInterval(this.inter2);
      console.log('kupa');
    }
  }

  getImage() {
    // setInterval(() => {
    // }, 1000);
    this.getData.getData()
      .subscribe(
        (img: Image) => {
          this.comingImage = `data:image/jpeg;base64,${img.base64}`;
        },
        (error: string) => { // temporary any type
          this.error = error;
          console.log('server err');
        });
  }

  captureImage() {
    this.getData.getData()
      .subscribe((img: Image) => {
        this.comingImage = `data:image/jpeg;base64,${img.base64}`; //need to add error handling
      },
        (err) => {
          console.log('error');
        });
        clearInterval(this.inter2);
        this.titleBtn = 'preview';

  }
  hideBtn() {
    this.disableBtn = false;
    this.titleCptBtn = 10;
    const inter = setInterval(() => {
      this.titleCptBtn--;
      if (this.titleCptBtn === 0) {
        clearInterval(inter);
      }
    }, 1000);

    setTimeout(() => {
      this.disableBtn = true;
      this.titleCptBtn = 'capture';
    }, 10000);
  }
}
