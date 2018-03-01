import {url} from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetData, Image } from './get-data.service';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})
export class XrayComponent implements OnInit {

  datas: string;
  constructor(private getData: GetData) { }

  comingImage: String = 'https://loremflickr.com/320/240';


  ngOnInit() {}

  getDataOnClick() {
    // this.comingImage = 'https://loremflickr.com/320/242';
    setInterval(() => {
      this.getData.getData()
    .subscribe((img: Image) => {
      this.comingImage = `data:image/jpeg;base64,${img.base64}`; //need to add error handling
      console.log('test test ');
    });
    }, 1000);
  }

  captureImage() {
    this.getData.getData()
    .subscribe((img: Image) => {
      this.comingImage = `data:image/jpeg;base64,${img.base64}`; //need to add error handling
  });
  }

  getParameters(){
    let sliderOneElement = document.getElementById("sliderOne");
    let sliderOneValue = sliderOneElement.getAttribute("aria-valuenow");
    
    let sliderTwoElement = document.getElementById("sliderTwo");
    let slidetTwoValue = sliderTwoElement.getAttribute("aria-valuenow");
    
    let checkboxOneElement = document.getElementById("checkboxOne-input");
    let checkboxOneValue = checkboxOneElement.getAttribute("aria-checked");
   
    let inputOneElement = document.getElementById("inputOne");
    let inputOneText = inputOneElement.value;

    var obj = new Object();
    obj.paramOne = sliderOneValue;
    obj.paramTwo = slidetTwoValue;
    obj.paramThree = checkboxOneValue;
    obj.paramFour = inputOneText;
    var jsonParameters = JSON.stringify(obj);
    console.log(jsonParameters);

  };
}
