import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetData } from './get-data.service';
import { test } from './textimg';


@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})
export class XrayComponent implements OnInit {

  constructor(private _getData: GetData) { }

  comingImage: String = 'https://loremflickr.com/320/240';

  ngOnInit() { }

  getData() {
    this._getData
      .getData(); // zamiast tego będzie funkcja podglądu
  }



  captureImage() {
    this.comingImage = 'https://loremflickr.com/320/242'; // zdjęcie będzie podmieniane
  }

}
