import { url } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Title } from '@angular/platform-browser';
// import 'rxjs/add/observable/interval'; // wird
import { GetDataService, Image } from '../global/get-data.service';
import { NgModel } from '@angular/forms';
import { imgAddress, xRayImage } from '../global/address';

@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})

export class XrayComponent implements OnInit {


  constructor(private getData: GetDataService) { }


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
  bodyParts = ['Default', 'Leg', 'Head'];
  user: 'user'; // teporary
  
  ngOnInit() { }

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

  playXraySound() {
    this.audio = new Audio();
    this.audio.src = 'assets/arc1.mp3';
    this.audio.load();
    this.audio.play();
  }

  getXray() {
    this.playXraySound();
    const res = this.getData.postData(xRayImage, this.freshDatas)
      .subscribe(
        (res: Image) => {
          setTimeout(() => {
            this.comingImage = `data:image/jpeg;base64,${res.base64}`;
          }, 2000);
        }
      );
  }

  setCapturebtn() {
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
    this.setCapturebtn();
    class DatasToSend {
      constructor(
        protected light: number,
        protected contrast: number,
        protected blackWhite: boolean,
        protected patientName: string,
        protected user: string) { }
    }
    // create new obj with datas from our inputs
    this.freshDatas = new DatasToSend(
      this.lightValue,
      this.contrastValue,
      this.blackAndWhite,
      this.patientName,
      this.user
    );
    // call getXray()
    this.getXray();

  }

  SelectBodyPart(bodyPartName: any) {
    switch (bodyPartName) {
      case 'Default':
        this.lightValue = 50;
        this.contrastValue = 50;
        this.blackAndWhite = false;
        break;

      case 'Leg':
        this.lightValue = 20;
        this.contrastValue = 30;
        this.blackAndWhite = true;
        break;

      case 'Head':
        this.lightValue = 75;
        this.contrastValue = 69;
        this.blackAndWhite = true;
        break;

      default:
        break;
    }
  }

}
