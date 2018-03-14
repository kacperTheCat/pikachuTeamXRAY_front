import { url } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Title } from '@angular/platform-browser';
import { GetDataService, Image } from '../global/get-data.service';
import { imgAddress, xRayImage } from '../global/address';



@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})

export class XrayComponent implements OnInit {

  constructor(private getData: GetDataService) { }

  comingImage: String = 'https://loremflickr.com/320/240';
  titleBtn = 'Preview';
  titleCptBtn: any = 'Capture';
  error: any;
  disableBtn = true;
  previevInterval: any;
  light = 0;
  contrast = 0;
  negative = false;
  patientName: string;
  freshDatas: object;
  audio: any;
  bodyParts = ['Default', 'Leg', 'Head'];
  userName: 'userName'; // teporary

  ngOnInit() { }

  getStream() {
    if (this.titleBtn === 'Preview') {
      this.previevInterval = setInterval(() => {
        this.getImage();
      }, 1000);
      this.titleBtn = 'Stop preview';
    } else {
      this.titleBtn = 'Preview';
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
        // tslint:disable-next-line:no-shadowed-variable
        (res: Image) => {
            this.comingImage = `data:image/jpeg;base64,${res.base64}`;
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
        protected negative: boolean,
        protected patientName: string,
        protected userName: string) { }
    }
    // create new obj with datas from our inputs
    this.freshDatas = new DatasToSend(
      this.light,
      this.contrast,
      this.negative,
      this.patientName,
      this.userName
    );

    this.getXray();
  }

  SelectBodyPart(bodyPartName: any) {
    switch (bodyPartName) {
      case 'Default':
        this.light = 50;
        this.contrast = 50;
        this.negative = false;
        break;

      case 'Leg':
        this.light = 20;
        this.contrast = 30;
        this.negative = true;
        break;

      case 'Head':
        this.light = 30;
        this.contrast = -20;
        this.negative = true;
        break;

      default:
        break;
    }
  }


}
