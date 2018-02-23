import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})
export class XrayComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() {
  }

}
