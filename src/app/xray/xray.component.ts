import { url } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/observable/interval'; // wird
import { GetDataService, Image } from '../global/get-data.service';
import { imgAddress, xRayImage } from '../global/address';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})

export class XrayComponent implements OnInit {

  datas: string;

  constructor(private getData: GetDataService) { }

  previewOn = ``;
  comingImage: String = 'https://loremflickr.com/320/240';
  titleBtn = 'preview';
  titleCptBtn: any = 'capture';
  error: any;
  disableBtn = true;
  previevInterval: any;
  lightValue = 50;
  contrastValue = 50;
  blackAndWhite = false;
  patientName: string;
  freshDatas: object;
  audio: any;
  src: any;
  bodyPart: any = [];
  clientUrl: String = 'http://localhost:61182/api/RtgParameters';

  ngOnInit() {
    this.bodyPart = [
      { name: 'Default', lightValue: 50, contrastValue:50, blackAndWhite: false },
      { name: 'Leg', lightValue: 70, contrastValue: 30, blackAndWhite: true },
      { name: 'Head', lightValue: 20, contrastValue: 70, blackAndWhite: true }
    ];
  }

  getStream() {
    if (this.titleBtn === 'preview') {
      this.previevInterval = setInterval(() => {
        this.getImage();
      }, 1000);
      this.titleBtn = 'stop prewiev';
    } else {
      this.titleBtn = 'preview';
      clearInterval(this.previevInterval); // prop to change
    }
  }

  getImage() {
    this.getData.getData(imgAddress)
      .subscribe(
        (img: Image) => {
          this.comingImage = `data:image/jpeg;base64,${img.base64}`;
        },
        (error: string) => {
          this.error = error;
          console.log('server err'); // need to full error handle
        });
  }

  getXray() {
    this.getData.getData(xRayImage)
      .subscribe(
        (img: Image) => {
          this.comingImage = `data:image/jpeg;base64,${img.base64}`;
        },
        (error: string) => {
          this.error = error;
          console.log('xRay error'); // need to full error handle
        });
  }

  captureImage() {
    this.getXray();
    clearInterval(this.previevInterval);
    this.titleBtn = 'preview'; // it shoud hide preview btn?
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

  onSubmit() {
    class DatasToSend {
      constructor(public light: number,
        public contrast: number,
        public blackWhite: boolean,
        public patientName: string) { }
    }
    this.freshDatas = new DatasToSend(this.lightValue, this.contrastValue, this.blackAndWhite, this.patientName);

    this.getData.postData(this.clientUrl,this.freshDatas)
      .subscribe(
        (data: any) => {
          this.captureImage();
          this.audio = new Audio();
          this.audio.src = 'assets/arc1.mp3';
          this.audio.load();
          this.audio.play();
        }
      );
  }

  SelectBodyPart(bodyPartName: any) {
    switch (bodyPartName) {
      case 'Default':
        this.lightValue = this.bodyPart[0].lightValue;
        this.contrastValue = this.bodyPart[0].contrastValue;
        this.blackAndWhite = this.bodyPart[0].blackAndWhite;
        break;

      case 'Leg':
        this.lightValue = this.bodyPart[1].lightValue;
        this.contrastValue = this.bodyPart[1].contrastValue;
        this.blackAndWhite = this.bodyPart[1].blackAndWhite;
      break;
        
      case 'Head':
        this.lightValue = this.bodyPart[2].lightValue;
        this.contrastValue = this.bodyPart[2].contrastValue;
        this.blackAndWhite = this.bodyPart[2].blackAndWhite;
        break;

      default:
        break;
    }
  }
}
